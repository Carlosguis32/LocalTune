import type { Express } from "express";
import { pb } from "../database";

export function registerSpotifyRoutes(app: Express) {
	//// GET REQUESTS ////

	// Get Spotify settings
	app.get("/api/v1/spotify/settings", async (_, res) => {
		try {
			const records = await pb.collection("spotifyAuth").getFullList();

			if (records.length === 0) {
				return res.json({ clientId: "", clientSecret: "" });
			}

			const { clientId, clientSecret } = records[0];
			res.json({ clientId, clientSecret });
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error getting Spotify settings: ${errorMessage}` });
		}
	});

	//// POST REQUESTS ////

	// Create or update the spotify settings
	app.post("/api/v1/spotify/settings", async (req, res) => {
		try {
			const { clientId, clientSecret } = req.body;
			const redirectUri = "http://127.0.0.1:3000/auth/spotify/callback";

			let record;
			try {
				const records = await pb.collection("spotifyAuth").getFullList();
				record = records[0];

				const updated = await pb.collection("spotifyAuth").update(record.id, {
					clientId,
					clientSecret,
					redirectUri,
				});

				return res.status(200).json(updated);
			} catch {
				const created = await pb.collection("spotifyAuth").create({
					clientId,
					clientSecret,
					redirectUri,
				});

				return res.status(201).json(created);
			}
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error setting Spotify settings: ${errorMessage}` });
		}
	});

	// Exchange code for Spotify tokens
	app.post("/api/v1/spotify/auth/exchange", async (req, res) => {
		try {
			const { code, codeVerifier } = req.body;

			const records = await pb.collection("spotifyAuth").getFullList();
			if (records.length === 0) {
				return res.status(400).json({ error: "Spotify settings not configured" });
			}

			const { clientId, clientSecret } = records[0];
			const redirectUri = "http://127.0.0.1:3000/auth/spotify/callback";

			const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

			const response = await fetch("https://accounts.spotify.com/api/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization: `Basic ${auth}`,
				},
				body: new URLSearchParams({
					grant_type: "authorization_code",
					code,
					redirect_uri: redirectUri,
					code_verifier: codeVerifier,
				}),
			});

			if (!response.ok) {
				return res.status(response.status).json({ error: "Failed to exchange code" });
			}

			const data = await response.json();

			const expiresAt = Date.now() + data.expires_in * 1000;

			const updated = await pb.collection("spotifyAuth").update(records[0].id, {
				accessToken: data.access_token,
				refreshToken: data.refresh_token,
				expiresAt,
			});

			res.json({ accessToken: data.access_token, expiresAt });
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error exchanging code: ${errorMessage}` });
		}
	});

	// Refresh Spotify token
	app.post("/api/v1/spotify/auth/refresh", async (req, res) => {
		try {
			const records = await pb.collection("spotifyAuth").getFullList();
			if (records.length === 0 || !records[0].refreshToken) {
				return res.status(400).json({ error: "No refresh token available" });
			}

			const { clientId, clientSecret, refreshToken } = records[0];

			const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

			const response = await fetch("https://accounts.spotify.com/api/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization: `Basic ${auth}`,
				},
				body: new URLSearchParams({
					grant_type: "refresh_token",
					refresh_token: refreshToken,
				}),
			});

			if (!response.ok) {
				return res.status(response.status).json({ error: "Failed to refresh token" });
			}

			const data = await response.json();

			const expiresAt = Date.now() + data.expires_in * 1000;

			const updated = await pb.collection("spotifyAuth").update(records[0].id, {
				accessToken: data.access_token,
				refreshToken: data.refresh_token || refreshToken,
				expiresAt,
			});

			res.json({ accessToken: data.access_token, expiresAt });
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error refreshing token: ${errorMessage}` });
		}
	});

	// Logout Spotify
	app.post("/api/v1/spotify/auth/logout", async (req, res) => {
		try {
			const records = await pb.collection("spotifyAuth").getFullList();
			if (records.length === 0) {
				return res.status(400).json({ error: "No auth record found" });
			}

			await pb.collection("spotifyAuth").update(records[0].id, {
				accessToken: null,
				refreshToken: null,
				expiresAt: null,
			});

			res.json({ message: "Logged out successfully" });
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : String(error);
			res.status(500).json({ error: `Error logging out: ${errorMessage}` });
		}
	});
}
