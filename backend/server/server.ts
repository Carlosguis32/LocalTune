import cors from "cors";
import express from "express";
import { PORT } from "./constants";

export const app = express();

app.use(cors());

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
