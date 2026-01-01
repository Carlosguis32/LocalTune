import { usePlayerContext } from '@/context/player/player-context';
import { API_BASE_URL } from '@/lib/constants';
import { RefObject, useEffect } from 'react';

export function usePlayer(audioRef: RefObject<HTMLAudioElement | null>) {
	const { audioQueue, currentQueuePosition, isPlaying, volume } = usePlayerContext();

	useEffect(() => {
		async function fetchAudio() {
			if (!audioRef.current) return;
			if (!audioQueue || audioQueue.length === 0) return;
			if (currentQueuePosition == null || currentQueuePosition < 0 || currentQueuePosition >= audioQueue.length)
				return;

			const currentAudio = audioQueue[currentQueuePosition];
			if (!currentAudio.data?.path) return;

			const currentSrc = audioRef.current.getAttribute('data-path');
			if (currentSrc === currentAudio.data.path) return;

			const response = await fetch(`${API_BASE_URL}/v1/audio/file/${encodeURIComponent(currentAudio.data.path)}`);
			if (response.ok) {
				const audioBlob = await response.blob();
				const audioUrl = URL.createObjectURL(audioBlob);

				audioRef.current.setAttribute('src', audioUrl);
				audioRef.current.setAttribute('data-path', currentAudio.data.path);

				if (isPlaying) {
					audioRef.current.play().catch((e) => console.error('Error auto-playing audio:', e));
				}
			}
		}

		fetchAudio();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [audioQueue, currentQueuePosition, audioRef]);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume;
		}
	}, [volume, audioRef]);
}
