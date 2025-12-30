import { pb } from '../database';

export async function getMusicPaths(): Promise<string[]> {
	try {
		const records = await pb.collection('musicPath').getFullList();
		return records.map((record) => record.path).filter((path) => path);
	} catch (error) {
		console.error('Error fetching music paths:', error);
		return [];
	}
}

export async function saveMusicPath(path: string): Promise<void> {
	try {
		await pb.collection('musicPath').create({ path });
	} catch (error) {
		console.error('Error saving music path:', error);
		throw error;
	}
}
