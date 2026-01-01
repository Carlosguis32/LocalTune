import cors from "cors";
import "dotenv/config";
import express from "express";
import { PORT } from "./constants";
import { authenticateAsSuperuserPocketBase } from "./database";
import { registerAudioRoutes } from "./routes/audio";
import { registerPlaylistRoutes } from "./routes/playlist";
import { registerSettingsRoutes } from "./routes/settings";
import { registerSpotifyRoutes } from "./routes/spotify";

export const app = express();

app.use(cors());
app.use(express.json());

// Authenticate as a superuser in PocketBase to have CRUD permissions
authenticateAsSuperuserPocketBase();

//// ROUTE REGISTER ////
registerAudioRoutes(app);
registerPlaylistRoutes(app);
registerSettingsRoutes(app);
registerSpotifyRoutes(app);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
