import { usePlayerContext } from '@/context/player/player-context';
import { getPlaylistById } from '@/lib/api/playlist';
import { AudioElement } from '@/types';
import { RefObject } from 'react';

export function usePlayerUtils() {
	const { setAudioQueue } = usePlayerContext();

	async function setNewAudioQueue(playlistId: string) {
		try {
			const playlist = await getPlaylistById(playlistId);

			if (!playlist || !playlist.audioFiles) {
				setAudioQueue([]);
				return;
			}

			const audioElements: AudioElement[] = playlist.audioFiles.map((audioFile) => ({
				data: audioFile,
				ref: { current: null } as unknown as RefObject<HTMLAudioElement | null>,
			}));

			setAudioQueue(audioElements);
		} catch (error) {
			console.error('Error fetching audio files:', error);
			setAudioQueue([]);
		}
	}

	return { setNewAudioQueue };
}
