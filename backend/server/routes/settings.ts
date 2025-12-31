import type { Express } from "express";
import { pb } from "../database";

export function registerSettingsRoutes(app: Express) {
	//// GET REQUESTS ////

	// Get the settings of the app
	app.get("/api/v1/settings", async (_, res) => {
		try {
			const settings = await pb.collection("settings").getFullList();

			res.status(201).json(settings[0]);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error getting settings: ${errorMessage}` });
		}
	});

	//// POST REQUESTS ////

	// Create or update the settings of the app
	app.post("/api/v1/settings", async (req, res) => {
		try {
			const settingsData = req.body;

			let settings;

			try {
				settings = await pb.collection("settings").getFullList();

				const updated = await pb.collection("settings").update(settings[0].id, {
					...settingsData,
				});

				return res.status(200).json(updated);
			} catch {
				const created = await pb.collection("settings").create({
					...settingsData,
				});

				return res.status(201).json(created);
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error setting user settings: ${errorMessage}` });
		}
	});
}
