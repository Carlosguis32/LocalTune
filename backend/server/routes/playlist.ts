import type { Express } from "express";
import { pb } from "../database";

export function registerPlaylistRoutes(app: Express) {
	//// GET REQUESTS ////

	// Get all playlists
	app.get("/api/v1/playlists", async (req, res) => {
		try {
			const playlists = await pb.collection("playlist").getFullList({
				sort: "created",
			});

			res.status(200).json(playlists);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error fetching playlists: ${errorMessage}` });
		}
	});

	// Get all audio files in a playlist
	app.get("/api/v1/playlist/:id", async (req, res) => {
		try {
			const playlist = await pb.collection("playlist").getOne(req.params.id, {
				expand: "audioFiles",
			});

			res.status(200).json({
				playlist,
				audioFiles: playlist.expand?.audioFiles || [],
			});
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error fetching audio files: ${errorMessage}` });
		}
	});

	//// POST REQUESTS ////

	// Create a new playlist
	app.post("/api/v1/playlist/create", async (req, res) => {
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

	//// PUT REQUESTS ////

	// Add one or more songs to a playlist
	app.put("/api/v1/playlist/:id/add-audio", async (req, res) => {
		try {
			const playlistId = req.params.id;
			const audioIds: string[] = Array.isArray(req.body.audioIds) ? req.body.audioIds : [req.body.audioIds];
			const playlist = await pb.collection("playlist").getOne(playlistId);

			const currentAudioFiles: string[] = playlist.audioFiles || [];
			const updatedAudioFiles = Array.from(new Set([...currentAudioFiles, ...audioIds]));

			const updatedPlaylist = await pb.collection("playlist").update(playlistId, {
				audioFiles: updatedAudioFiles,
			});

			res.status(200).json(updatedPlaylist);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error adding audio files: ${errorMessage}` });
		}
	});

	// Remove one or more songs from a playlist
	app.put("/api/v1/playlist/:id/remove-audio", async (req, res) => {
		try {
			const playlistId = req.params.id;
			const audioIdsToRemove: string[] = Array.isArray(req.body.audioIds)
				? req.body.audioIds
				: [req.body.audioIds];

			const playlist = await pb.collection("playlist").getOne(playlistId);
			const currentAudioFiles: string[] = playlist.audioFiles || [];

			const updatedAudioFiles = currentAudioFiles.filter((id) => !audioIdsToRemove.includes(id));

			const updatedPlaylist = await pb.collection("playlist").update(playlistId, {
				audioFiles: updatedAudioFiles,
			});

			res.status(200).json(updatedPlaylist);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error removing audio files: ${errorMessage}` });
		}
	});

	//// DELETE REQUESTS ////

	// Delete a playlist by ID
	app.delete("/api/v1/playlist/:id", async (req, res) => {
		try {
			const playlistId = req.params.id;
			await pb.collection("playlist").delete(playlistId);
			res.status(200).json({ message: "Playlist deleted successfully." });
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error deleting playlist: ${errorMessage}` });
		}
	});
}
