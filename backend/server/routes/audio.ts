import type { Express } from "express";
import fs from "fs";
import { parseFile } from "music-metadata";
import path from "path";
import { SUPPORTED_AUDIO_FILE_EXTENSIONS } from "../constants";
import "../database";
import { pb } from "../database";
import { readPlatformIdsFromFile, writePlatformIdsToFile } from "../utils/utils";

const pathModule = path;

export function registerAudioRoutes(app: Express) {
	//// GET REQUESTS ////

	// Get all audio paths
	app.get("/api/v1/audio/paths", async (_, res) => {
		try {
			const records = await pb.collection("audioPath").getFullList();
			const paths = records.map((record) => record.path).filter((path) => path);
			res.json(paths);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error fetching music paths: ${errorMessage}` });
		}
	});

	// Returns a list of audio files in the specified folder path
	app.get("/api/v1/audio/folder/:folder", (req, res) => {
		if (!req.params.folder) {
			return res.status(400).send("The path of the folder could not be identified");
		}

		fs.readdir(req.params.folder, (err, files) => {
			if (err) {
				return res.status(400).send(`Error when reading the folder: ${err.message}`);
			}

			const audioFiles = files.filter((file) => {
				const extension = path.extname(file).toLowerCase();
				return SUPPORTED_AUDIO_FILE_EXTENSIONS.includes(extension);
			});

			res.status(200).json(audioFiles);
		});
	});

	// Returns metadata for a specific audio file
	app.get("/api/v1/audio/metadata/:path", async (req, res) => {
		try {
			const metadata = await parseFile(req.params.path);
			const platformIds = await readPlatformIdsFromFile(req.params.path);

			res.status(200).json({
				title: metadata.common.title,
				artist: metadata.common.artist,
				album: metadata.common.album,
				albumCoverImage: metadata.common.picture,
				platformIds,
			});
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error parsing metadata: ${errorMessage}` });
		}
	});

	// Serves the audio file at the specified path
	app.get("/api/v1/audio/file/:path", (req, res) => {
		res.sendFile(req.params.path);
	});

	//// POST REQUESTS ////

	// Save a new audio path
	app.post("/api/v1/audio/path", async (req, res) => {
		try {
			const { path } = req.body;

			if (!path) {
				return res.status(400).json({ error: "Path is required" });
			}

			await pb.collection("audioPath").create({ path });
			res.status(201).json({ message: "Audio path saved" });
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error saving music path: ${errorMessage}` });
		}
	});

	// Write metadata to an audio file
	app.post("/api/v1/audio/metadata/:path", async (req, res) => {
		try {
			const { path } = req.params;
			const { metadata } = req.body;

			// Write platform IDs to file metadata
			const success = await writePlatformIdsToFile(path, metadata.platformIds);

			if (success) {
				// Also update database if record exists
				try {
					// Find the audio file record by path
					const audioFileRecord = await pb.collection("audioFile").getFirstListItem(`path="${path}"`);

					// Update metadata record
					if (audioFileRecord.metadata) {
						await pb.collection("audioMetadata").update(audioFileRecord.metadata, {
							filename: pathModule.basename(path, pathModule.extname(path)),
							artist: metadata.artist,
							album: metadata.album,
							title: metadata.title,
						});
					}

					// Update or create provider ID record
					if (metadata.platformIds.spotify) {
						if (audioFileRecord.providerId) {
							await pb.collection("audioProviderId").update(audioFileRecord.providerId, {
								spotifyId: metadata.platformIds.spotify,
							});
						} else {
							const providerIdRecord = await pb.collection("audioProviderId").create({
								spotifyId: metadata.platformIds.spotify,
							});
							await pb.collection("audioFile").update(audioFileRecord.id, {
								providerId: providerIdRecord.id,
							});
						}
					} else if (audioFileRecord.providerId) {
						// Remove provider ID if no longer exists
						await pb.collection("audioProviderId").delete(audioFileRecord.providerId);
						await pb.collection("audioFile").update(audioFileRecord.id, {
							providerId: null,
						});
					}
				} catch (dbError) {
					console.warn("Could not update database:", dbError);
				}

				res.status(200).json({ message: "Metadata updated correctly" });
			} else {
				res.status(500).json({ error: "Failed to save platform IDs to file" });
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error writing platform IDs: ${errorMessage}` });
		}
	});

	// Scan folder and save audio files to database
	app.post("/api/v1/audio/scan/folder/:path", async (req, res) => {
		try {
			const folder = req.params.path;
			const files = fs.readdirSync(folder);

			const audioFiles = files.filter((file) => {
				const extension = path.extname(file).toLowerCase();
				return SUPPORTED_AUDIO_FILE_EXTENSIONS.includes(extension);
			});

			const savedRecords = [];

			for (const fileName of audioFiles) {
				try {
					const filePath = path.join(folder, fileName);

					const platformIds = await readPlatformIdsFromFile(filePath);

					let providerIdRecord = null;
					if (platformIds.spotify) {
						providerIdRecord = await pb.collection("audioProviderId").create({
							spotifyId: platformIds.spotify,
						});
					}

					const record = await pb.collection("audioFile").create({
						path: filePath,
						providerId: providerIdRecord?.id,
					});

					savedRecords.push(record);
				} catch (error) {
					console.error(`Error saving ${fileName}:`, error);
				}
			}

			res.status(200).json({
				message: `Scanned ${audioFiles.length} files, saved ${savedRecords.length} records`,
				savedRecords,
			});
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error scanning folder: ${errorMessage}` });
		}
	});
}
