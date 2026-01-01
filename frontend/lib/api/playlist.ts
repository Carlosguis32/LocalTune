import { PlaylistRecord } from '@/database-types';
import { API_BASE_URL } from '../constants';

export async function getAllPlaylists(): Promise<PlaylistRecord[]> {
	const response = await fetch(`${API_BASE_URL}/v1/playlists`);

	if (!response.ok) {
		throw new Error(`Failed to fetch playlists: ${response.statusText}`);
	}

	return response.json();
}

export async function getPlaylistById(playlistId: string): Promise<PlaylistRecord> {
	const response = await fetch(`${API_BASE_URL}/v1/playlist/${playlistId}`);

	if (!response.ok) {
		throw new Error(`Failed to fetch playlist: ${response.statusText}`);
	}

	const data = await response.json();
	return {
		...data.playlist,
		audioFiles: data.audioFiles,
	};
}
