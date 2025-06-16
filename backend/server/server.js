import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { parseFile } from "music-metadata";

const app = express();
const PORT = 8571;

app.use(cors());

app.get("/api/audio-folder/:path", (req, res) => {
	if (!req.params.path) {
		return res.status(400).send("The path of the folder could not be identified");
	}

	fs.readdir(req.params.path, (err, files) => {
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

app.get("/api/audio/metadata/:folder/:filename", async (req, res) => {
	try {
		const { folder, filename } = req.params;
		const filePath = path.join(decodeURIComponent(folder), decodeURIComponent(filename));

		const metadata = await parseFile(filePath);

		res.status(200).json({
			title: metadata.common.title,
			artist: metadata.common.artist,
			album: metadata.common.album,
			albumCoverImage: metadata.common.picture[0].data.toString("base64"),
		});
	} catch (error) {
		res.status(500).json({ error: `Error parsing metadata: ${error.message}` });
	}
});

app.get("/api/audio/:path", (req, res) => {
	res.sendFile(req.params.path);
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
