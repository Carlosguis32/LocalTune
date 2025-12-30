import type { Express } from "express";
import { pb } from "../database";

export function registerUserRoutes(app: Express) {
	//// GET REQUESTS ////

	// Get the settings of a user
	app.get("/api/v1/user/:userId/settings", async (req, res) => {
		try {
			const { userId } = req.params;
			const settings = await pb.collection("settings").getFirstListItem(`user="${userId}"`);

			res.status(201).json(settings);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error getting settings: ${errorMessage}` });
		}
	});

	// Set (create or update) the settings of a user
	app.post("/api/v1/user/:userId/settings", async (req, res) => {
		try {
			const { userId } = req.params;
			const settingsData = req.body;

			let settings;

			try {
				settings = await pb.collection("settings").getFirstListItem(`user="${userId}"`);

				const updated = await pb.collection("settings").update(settings.id, {
					...settingsData,
					user: userId,
				});

				return res.status(200).json(updated);
			} catch {
				const created = await pb.collection("settings").create({
					...settingsData,
					user: userId,
				});

				return res.status(201).json(created);
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error setting user settings: ${errorMessage}` });
		}
	});
}
