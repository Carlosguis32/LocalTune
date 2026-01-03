import { usePlayerContext } from '@/context/player/player-context';
import { getSpotifyPlaylistTracks } from '@/lib/api/spotify';
import { AudioElement } from '@/types';
import { RefObject } from 'react';

export function usePlayerUtils() {
	const { setAudioQueue } = usePlayerContext();

	async function setNewAudioQueue(playlistId: string) {
		try {
			const tracks = await getSpotifyPlaylistTracks(playlistId);

			if (!tracks || tracks.length === 0) {
				setAudioQueue([]);
				return;
			}

			// Convertir tracks de Spotify a AudioFiles
			const audioFiles = tracks
				.filter((item) => item.track && !item.track.is_local)
				.map((item) => ({
					id: item.track.id,
					path: '',
					spotifyId: item.track.id,
					title: item.track.name,
					artist: item.track.artists?.[0]?.name || 'Unknown Artist',
					album: item.track.album?.name || 'Unknown Album',
					duration: Math.floor(item.track.duration_ms / 1000),
					created: new Date().toISOString() as any,
					updated: new Date().toISOString() as any,
				}));

			const audioElements: AudioElement[] = audioFiles.map((audioFile) => ({
				data: audioFile,
				ref: { current: null } as unknown as RefObject<HTMLAudioElement | null>,
			}));

			setAudioQueue(audioElements);
		} catch (error) {
			console.error('Error fetching playlist tracks:', error);
			setAudioQueue([]);
		}
	}

	return { setNewAudioQueue };
}
