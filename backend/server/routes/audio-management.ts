import fs from "fs";
import { parseFile } from "music-metadata";
import path from "path";
import { app } from "../server";

// Returns a list of audio files (.mp3, .wav, .ogg) in the specified folder path
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
			return [".mp3", ".wav", ".ogg"].includes(extension);
		});

		res.status(200).json(audioFiles);
	});
});

// Returns metadata (title, artist, album, album cover) for a specific audio file
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
