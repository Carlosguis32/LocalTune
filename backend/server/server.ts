import cors from "cors";
import "dotenv/config";
import express from "express";
import { PORT } from "./constants";

export const app = express();

app.use(cors());

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
