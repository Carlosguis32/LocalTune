import { API_BASE_URL } from '../constants';

export async function getAudioPaths(): Promise<string[]> {
	try {
		const response = await fetch(`${API_BASE_URL}/v1/audio/paths`);

		if (!response.ok) {
			throw new Error(`Failed to fetch audio paths: ${response.statusText}`);
		}

		return response.json();
	} catch (error) {
		console.error('Error fetching music paths:', error);
		return [];
	}
}

export async function saveAudioPath(path: string): Promise<void> {
	try {
		const response = await fetch(`${API_BASE_URL}/v1/audio/path`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ path }),
		});

		if (!response.ok) {
			throw new Error(`Failed to save audio path: ${response.statusText}`);
		}
	} catch (error) {
		console.error('Error saving music path:', error);
		throw error;
	}
}
