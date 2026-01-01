import { AudioFileRecord, PlaylistRecord } from '@/database-types';
import { API_BASE_URL } from '../constants';

export async function getAllPlaylists(): Promise<PlaylistRecord[]> {
	const response = await fetch(`${API_BASE_URL}/v1/playlists`);

	if (!response.ok) {
		throw new Error(`Failed to fetch playlists: ${response.statusText}`);
	}

	return response.json();
}

export async function getAllAudiosInAPlaylist(playlistId: string): Promise<AudioFileRecord[]> {
	const response = await fetch(`${API_BASE_URL}/v1/playlist/${playlistId}`);

	if (!response.ok) {
		throw new Error(`Failed to fetch audio files: ${response.statusText}`);
	}

	return response.json();
}
