import fs from "fs";
import { parseFile } from "music-metadata";
import path from "path";
import PocketBase from "pocketbase/cjs";
import { SUPPORTED_AUDIO_FILE_EXTENSIONS } from "../constants";
import { app } from "../server";
import { readPlatformIdsFromFile, writePlatformIdsToFile } from "../utils/utils";

// Initialize PocketBase client
const pb = new PocketBase("http://127.0.0.1:8090");

//// GET REQUESTS ////

// Returns a list of audio files in the specified folder path
app.get("/api/audio/folder/:folder", (req, res) => {
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
app.get("/api/audio/metadata/:folder/:filename", async (req, res) => {
	try {
		const filePath = path.join(decodeURIComponent(req.params.folder), decodeURIComponent(req.params.filename));
		const metadata = await parseFile(filePath);

		res.status(200).json({
			title: metadata.common.title,
			artist: metadata.common.artist,
			album: metadata.common.album,
			albumCoverImage:
				metadata.common.picture && metadata.common.picture.length > 0
					? Buffer.from(metadata.common.picture[0].data).toString("base64")
					: null,
		});
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		res.status(500).json({ error: `Error parsing metadata: ${errorMessage}` });
	}
});

// Serves the audio file at the specified path
app.get("/api/audio/file/:folder/:filename", (req, res) => {
	const filePath = path.join(decodeURIComponent(req.params.folder), decodeURIComponent(req.params.filename));
	res.sendFile(filePath);
});

//// POST REQUESTS ////

// Scan folder and save audio files to database
app.post("/api/audio/scan/folder/:folder", async (req, res) => {
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

				const record = await pb.collection("audio_file").create({
					audio_id: path.parse(file).name,
					spotify_id: platformIds.spotify || null,
					deezer_id: platformIds.deezer || null,
					apple_music_id: platformIds.apple_music || null,
					youtube_id: platformIds.youtube || null,
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

// Create a new playlist
app.post("/api/playlists", async (req, res) => {
	try {
		const { audioFileIds } = req.body;

		if (!audioFileIds || !Array.isArray(audioFileIds)) {
			return res.status(400).json({ error: "audioFileIds array is required" });
		}

		const playlist = await pb.collection("playlist").create({
			audio_file: audioFileIds,
		});

		res.status(201).json(playlist);
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		res.status(500).json({ error: `Error creating playlist: ${errorMessage}` });
	}
});

// Write platform IDs to file metadata
app.post("/api/audio/platforms/:folder/:filename", async (req, res) => {
	try {
		const { folder, filename } = req.params;
		const { platformIds } = req.body; // { spotify: "id", deezer: "id", ... }

		if (!platformIds || typeof platformIds !== "object") {
			return res.status(400).json({ error: "platformIds object is required" });
		}

		const filePath = path.join(decodeURIComponent(folder), decodeURIComponent(filename));

		// Write platform IDs to file metadata
		const success = await writePlatformIdsToFile(filePath, platformIds);

		if (success) {
			// Also update database if record exists
			try {
				const audioId = path.parse(filename).name;
				await pb.collection("audio_file").update(audioId, {
					spotify_id: platformIds.spotify || null,
					deezer_id: platformIds.deezer || null,
					apple_music_id: platformIds.apple_music || null,
					youtube_id: platformIds.youtube || null,
				});
			} catch (dbError) {
				console.warn("Could not update database:", dbError);
			}

			res.json({
				message: "Platform IDs saved to file metadata and database",
				platformIds,
			});
		} else {
			res.status(500).json({ error: "Failed to save platform IDs to file" });
		}
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		res.status(500).json({ error: `Error writing platform IDs: ${errorMessage}` });
	}
});

// Read platform IDs from file metadata
app.get("/api/audio/platforms/:folder/:filename", async (req, res) => {
	try {
		const filePath = path.join(decodeURIComponent(req.params.folder), decodeURIComponent(req.params.filename));
		const platformIds = await readPlatformIdsFromFile(filePath);
		res.json(platformIds);
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		res.status(500).json({ error: `Error reading platform IDs: ${errorMessage}` });
	}
});
