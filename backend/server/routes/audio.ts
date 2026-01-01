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
			const paths = records.map((record) => record.path?.trim()).filter((path) => path);
			res.json(paths);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error fetching music paths: ${errorMessage}` });
		}
	});

	// Get all audio files in a folder
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

	// Get all metadata of an audio file
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

	// Serve an audio file at the specified path
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

			await pb.collection("audioPath").create({ path: path.trim() });
			res.status(201).json({ message: "Audio path saved" });
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error saving music path: ${errorMessage}` });
		}
	});

	//// DELETE REQUESTS ////

	// Delete an audio path
	app.delete("/api/v1/audio/path", async (req, res) => {
		try {
			const { path } = req.body;

			if (!path) {
				return res.status(400).json({ error: "Path is required" });
			}

			const trimmedPath = path.trim();
			const records = await pb.collection("audioPath").getFullList();
			const recordToDelete = records.find((record) => record.path?.trim() === trimmedPath);

			if (!recordToDelete) {
				return res.status(404).json({ error: "Path not found" });
			}

			await pb.collection("audioPath").delete(recordToDelete.id);
			res.status(200).json({ message: "Audio path deleted" });
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error deleting music path: ${errorMessage}` });
		}
	});

	// Write metadata to an audio file
	app.post("/api/v1/audio/metadata/:path", async (req, res) => {
		try {
			const { path } = req.params;
			const { metadata } = req.body;

			const success = await writePlatformIdsToFile(path, metadata.platformIds);

			if (success) {
				res.status(200).json({ message: "Platform IDs written successfully" });
			} else {
				res.status(500).json({ error: "Failed to write platform IDs" });
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

					const record = await pb.collection("audioFile").create({
						path: filePath,
						spotifyId: platformIds.spotify,
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
