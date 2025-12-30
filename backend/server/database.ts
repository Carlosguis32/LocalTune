import PocketBase from "pocketbase/cjs";
import { POCKETBASE_SUPERUSER_EMAIL, POCKETBASE_SUPERUSER_PASSWORD } from "./constants";

// Initialize PocketBase client
export const pb = new PocketBase("http://localhost:8090");
pb.autoCancellation(false);

// Authenticate as superuser
export async function authenticateAsSuperuserPocketBase() {
	try {
		const superuserEmail = POCKETBASE_SUPERUSER_EMAIL || "admin@example.com";
		const superuserPassword = POCKETBASE_SUPERUSER_PASSWORD || "password";
		await pb.collection("_superusers").authWithPassword(superuserEmail, superuserPassword);
		console.log("PocketBase superuser authenticated successfully");
	} catch (error) {
		console.error("Failed to authenticate PocketBase superuser:", error);
	}
}
