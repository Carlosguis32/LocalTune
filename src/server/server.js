import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 8571;

app.use(cors());

app.get('/api/audio-folder/:path', (req, res) => {
	if (!req.params.path) {
		return res
			.status(400)
			.send('The path of the folder could not be identified');
	}

	fs.readdir(req.params.path, (err, files) => {
		if (err) {
			return res
				.status(400)
				.send(`Error when reading the folder: ${err.message}`);
		}

		const audioFiles = files.filter((file) => {
			const extension = path.extname(file).toLowerCase();
			return ['.mp3', '.wav', '.ogg'].includes(extension);
		});

		res.status(200).json(audioFiles);
	});
});

app.get('/api/audio/:path', (req, res) => {
	res.sendFile(req.params.path);
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
