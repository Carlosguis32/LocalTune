import type { Express } from "express";
import fs from "fs";
import { parseFile } from "music-metadata";
import path from "path";
import { SUPPORTED_AUDIO_FILE_EXTENSIONS } from "../constants";
import "../database";
import { pb } from "../database";
import { readPlatformIdsFromFile, writePlatformIdsToFile } from "../utils/utils";

export function registerAudioRoutes(app: Express) {
	//// GET REQUESTS ////

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
	app.get("/api/v1/audio/metadata/:folder/:filename", async (req, res) => {
		try {
			const filePath = path.join(decodeURIComponent(req.params.folder), decodeURIComponent(req.params.filename));
			const metadata = await parseFile(filePath);
			const platformIds = await readPlatformIdsFromFile(filePath);

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
	app.get("/api/v1/audio/file/:folder/:filename", (req, res) => {
		const filePath = path.join(decodeURIComponent(req.params.folder), decodeURIComponent(req.params.filename));
		res.sendFile(filePath);
	});

	//// POST REQUESTS ////

	// Write metadata to an audio file
	app.post("/api/v1/audio/metadata/:folder/:filename", async (req, res) => {
		try {
			const { folder, filename } = req.params;
			const { metadata } = req.body;
			const filePath = path.join(decodeURIComponent(folder), decodeURIComponent(filename));

			// Write platform IDs to file metadata
			const success = await writePlatformIdsToFile(filePath, metadata.platformIds);

			if (success) {
				// Also update database if record exists
				try {
					await pb.collection("audio_file").update(metadata.id, {
						filename: path.parse(filename).base,
						artist: metadata.artist,
						album: metadata.album,
						albumCoverImage: metadata.albumCoverImage,
						title: metadata.title,
						spotify_id: metadata.platformIds.spotify || null,
					});
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
	app.post("/api/v1/audio/scan/folder/:folder", async (req, res) => {
		try {
			const folder = req.params.folder;

			if (!folder) {
				return res.status(400).json({ error: "folder is required" });
			}

			// Read audio files from folder
			const files = fs.readdirSync(folder);
			const audioFiles = files.filter((file) => {
				const extension = path.extname(file).toLowerCase();
				return SUPPORTED_AUDIO_FILE_EXTENSIONS.includes(extension);
			});

			// Save each audio file to database
			const savedRecords = [];

			for (const file of audioFiles) {
				try {
					const filePath = path.join(folder, file);
					const platformIds = await readPlatformIdsFromFile(filePath);
					const metadata = await parseFile(filePath);

					// Check if record already exists
					try {
						await pb.collection("audioFile").getFirstListItem(`filename="${path.parse(file).base}"`);
						continue;
					} catch (existsError) {
						// Doesn't exist, proceed to create
					}

					const record = await pb.collection("audioFile").create({
						filename: path.parse(file).base,
						artist: metadata.common.artist,
						album: metadata.common.album,
						albumCoverImage:
							metadata.common.picture && metadata.common.picture.length > 0
								? Buffer.from(metadata.common.picture[0].data).toString("base64")
								: null,
						title: metadata.common.title,
						spotify_id: platformIds.spotify || null,
					});
					savedRecords.push(record);
				} catch (error) {
					console.error(`Error saving ${file}:`, error);
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
