import cors from "cors";
import "dotenv/config";
import express from "express";
import { PORT } from "./constants";
import { authenticateAsSuperuserPocketBase } from "./database";
import { registerAudioRoutes } from "./routes/audio";
import { registerPlaylistRoutes } from "./routes/playlist";
import { registerUserRoutes } from "./routes/user";

export const app = express();

app.use(cors());
app.use(express.json());

// Authenticate as a superuser in PocketBase to have CRUD permissions
authenticateAsSuperuserPocketBase();

//// ROUTE REGISTER ////
registerAudioRoutes(app);
registerPlaylistRoutes(app);
registerUserRoutes(app);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
