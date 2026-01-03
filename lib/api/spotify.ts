import { invoke } from '@tauri-apps/api/core';
import { SpotifyPlaylist, SpotifyPlaylistTrack } from '@/database-types';

export async function getSpotifySettings(): Promise<{ clientId: string; clientSecret: string }> {
	try {
		const settings = await invoke<{ clientId: string; clientSecret: string }>('get_spotify_settings');
		return settings;
	} catch (error) {
		console.error('Error fetching Spotify settings:', error);
		throw error;
	}
}

export async function saveSpotifySettings(data: { clientId: string; clientSecret: string }): Promise<void> {
	try {
		await invoke('save_spotify_settings', {
			clientId: data.clientId,
			clientSecret: data.clientSecret,
		});
	} catch (error) {
		console.error('Error saving Spotify settings:', error);
		throw error;
	}
}

export async function exchangeToken(
	code: string,
	codeVerifier: string
): Promise<{ accessToken: string; expiresAt: number }> {
	try {
		const result = await invoke<{ access_token: string; expires_at: number }>('exchange_spotify_code', {
			code,
			codeVerifier,
		});
		
		// Convertir snake_case a camelCase
		return {
			accessToken: result.access_token,
			expiresAt: result.expires_at,
		};
	} catch (error) {
		console.error('Error exchanging token:', error);
		throw error;
	}
}

export async function refreshToken(): Promise<{ accessToken: string; expiresAt: number }> {
	try {
		const result = await invoke<{ access_token: string; expires_at: number }>('refresh_spotify_token');
		
		return {
			accessToken: result.access_token,
			expiresAt: result.expires_at,
		};
	} catch (error: any) {
		// Don't log authentication/configuration errors - let the caller handle them
		const errorString = error?.toString() || '';
		const isAuthError = errorString.includes('No hay sesión activa') || 
							errorString.includes('session') ||
							errorString.includes('Configuración de Spotify no encontrada');
		
		if (!isAuthError) {
			console.error('Error refreshing token:', error);
		}
		throw error;
	}
}

export async function logoutSpotify(): Promise<void> {
	try {
		await invoke('logout_spotify');
	} catch (error) {
		console.error('Error logging out:', error);
		throw error;
	}
}

// ============ Gestión de Playlists ============

export async function getSpotifyPlaylists(limit?: number, offset?: number): Promise<SpotifyPlaylist[]> {
	try {
		const playlists = await invoke<SpotifyPlaylist[]>('get_spotify_playlists', {
			limit,
			offset,
		});
		return playlists;
	} catch (error: any) {
		// Don't log authentication/configuration errors - let the caller handle them
		const errorString = error?.toString() || '';
		const isAuthError = errorString.includes('No hay sesión activa') || 
							errorString.includes('session') ||
							errorString.includes('Configuración de Spotify no encontrada');
		
		if (!isAuthError) {
			console.error('Error fetching Spotify playlists:', error);
		}
		throw error;
	}
}

export async function getSpotifyPlaylistTracks(
	playlistId: string,
	limit?: number,
	offset?: number
): Promise<SpotifyPlaylistTrack[]> {
	try {
		const tracks = await invoke<SpotifyPlaylistTrack[]>('get_spotify_playlist_tracks', {
			playlistId,
			limit,
			offset,
		});
		return tracks;
	} catch (error: any) {
		// Don't log authentication/configuration errors - let the caller handle them
		const errorString = error?.toString() || '';
		const isAuthError = errorString.includes('No hay sesión activa') || 
							errorString.includes('session') ||
							errorString.includes('Configuración de Spotify no encontrada');
		
		if (!isAuthError) {
			console.error('Error fetching Spotify playlist tracks:', error);
		}
		throw error;
	}
}

export async function createSpotifyPlaylist(
	name: string,
	description?: string,
	isPublic?: boolean
): Promise<SpotifyPlaylist> {
	try {
		const playlist = await invoke<SpotifyPlaylist>('create_spotify_playlist', {
			name,
			description,
			public: isPublic,
		});
		return playlist;
	} catch (error) {
		console.error('Error creating Spotify playlist:', error);
		throw error;
	}
}

export async function addTracksToSpotifyPlaylist(
	playlistId: string,
	trackUris: string[],
	position?: number
): Promise<string> {
	try {
		const snapshotId = await invoke<string>('add_tracks_to_spotify_playlist', {
			playlistId,
			trackUris,
			position,
		});
		return snapshotId;
	} catch (error) {
		console.error('Error adding tracks to Spotify playlist:', error);
		throw error;
	}
}

export async function removeTracksFromSpotifyPlaylist(
	playlistId: string,
	trackUris: string[],
	snapshotId?: string
): Promise<string> {
	try {
		const newSnapshotId = await invoke<string>('remove_tracks_from_spotify_playlist', {
			playlistId,
			trackUris,
			snapshotId,
		});
		return newSnapshotId;
	} catch (error) {
		console.error('Error removing tracks from Spotify playlist:', error);
		throw error;
	}
}

export async function deleteSpotifyPlaylist(playlistId: string): Promise<string> {
	try {
		const result = await invoke<string>('delete_spotify_playlist', {
			playlistId,
		});
		return result;
	} catch (error) {
		console.error('Error deleting Spotify playlist:', error);
		throw error;
	}
}