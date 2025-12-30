import type { Express } from "express";
import { pb } from "../database";

export function registerPlaylistRoutes(app: Express) {
	//// POST REQUESTS ////

	// Create a new playlist
	app.post("/api/playlist/create", async (req, res) => {
		try {
			const playlist = await pb.collection("playlist").create({
				name: req.body.name,
			});

			res.status(201).json(playlist);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error creating playlist: ${errorMessage}` });
		}
	});
}
