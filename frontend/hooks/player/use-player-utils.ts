import { usePlayerContext } from '@/context/player/player-context';
import { getAllAudiosInAPlaylist } from '@/lib/api/playlist';
import { AudioElement } from '@/types';
import { RefObject } from 'react';

export function usePlayerUtils() {
	const { setAudioQueue } = usePlayerContext();

	async function setNewAudioQueue(playlistId: string) {
		try {
			const audioFiles = await getAllAudiosInAPlaylist(playlistId);

			if (!audioFiles) {
				setAudioQueue([]);
				return;
			}

			const audioElements: AudioElement[] = audioFiles.map((audioFile) => ({
				data: audioFile,
				ref: { current: null } as unknown as RefObject<HTMLAudioElement>,
			}));

			setAudioQueue(audioElements);
		} catch (error) {
			console.error('Error fetching audio files:', error);
			setAudioQueue([]);
		}
	}

	return { setNewAudioQueue };
}
