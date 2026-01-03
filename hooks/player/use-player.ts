import { usePlayerContext } from '@/context/player/player-context';
import { convertFileSrc } from '@tauri-apps/api/core';
import { invoke } from '@tauri-apps/api/core';
import { RefObject, useEffect } from 'react';

export function usePlayer(audioRef: RefObject<HTMLAudioElement | null>) {
	const { audioQueue, currentQueuePosition, isPlaying, volume } = usePlayerContext();

	useEffect(() => {
		async function loadAudio() {
			if (!audioRef.current) return;
			if (!audioQueue || audioQueue.length === 0) {
				// Clear the audio source if there's no queue
				if (audioRef.current.src) {
					audioRef.current.removeAttribute('src');
					audioRef.current.removeAttribute('data-path');
					audioRef.current.load();
				}
				return;
			}
			if (currentQueuePosition == null || currentQueuePosition < 0 || currentQueuePosition >= audioQueue.length)
				return;

			const currentAudio = audioQueue[currentQueuePosition];
			
			// Verificar que tenga path válido (solo archivos locales tienen path)
			if (!currentAudio.data?.path || currentAudio.data.path.trim() === '') {
				console.warn('Skipping track without valid path:', currentAudio.data);
				// Clear the audio source if path is invalid
				if (audioRef.current.src) {
					audioRef.current.removeAttribute('src');
					audioRef.current.removeAttribute('data-path');
					audioRef.current.load();
				}
				return;
			}

			const currentSrc = audioRef.current.getAttribute('data-path');
			if (currentSrc === currentAudio.data.path) return;

			// Verificar que el archivo existe antes de intentar cargarlo
			try {
				const exists = await invoke<boolean>('file_exists', { path: currentAudio.data.path });
				if (!exists) {
					console.error('File does not exist:', currentAudio.data.path);
					console.error('Track data:', currentAudio.data);
					// Clear the audio source if file doesn't exist
					if (audioRef.current.src) {
						audioRef.current.removeAttribute('src');
						audioRef.current.removeAttribute('data-path');
						audioRef.current.load();
					}
					return;
				}
			} catch (error) {
				console.error('Error checking file existence:', error);
				return;
			}

			// Pause before changing source to prevent errors
			audioRef.current.pause();

			// Convertir la ruta del archivo al formato que puede usar el elemento <audio>
			// convertFileSrc convierte "C:\path\to\file.mp3" a "https://asset.localhost/C:\path\to\file.mp3"
			const audioUrl = convertFileSrc(currentAudio.data.path);

			console.log('Loading audio:', {
				path: currentAudio.data.path,
				url: audioUrl,
				title: currentAudio.data.title
			});

			// Set the source and load the audio
			audioRef.current.src = audioUrl;
			audioRef.current.setAttribute('data-path', currentAudio.data.path);
			audioRef.current.load();

			if (isPlaying) {
				// Wait for canplay event before attempting to play
				const handleCanPlay = () => {
					audioRef.current?.play().catch((e) => {
						console.error('Error auto-playing audio:', e);
						console.error('Failed audio URL:', audioUrl);
						console.error('Failed audio path:', currentAudio.data.path);
					});
					audioRef.current?.removeEventListener('canplay', handleCanPlay);
				};

				// Add a timeout in case canplay never fires
				const timeoutId = setTimeout(() => {
					audioRef.current?.removeEventListener('canplay', handleCanPlay);
					console.warn('Canplay event timeout, attempting to play anyway');
					audioRef.current?.play().catch((e) => {
						console.error('Error playing audio after timeout:', e);
					});
				}, 5000);

				audioRef.current.addEventListener('canplay', handleCanPlay, { once: true });

				// Clean up timeout if component unmounts
				return () => {
					clearTimeout(timeoutId);
					audioRef.current?.removeEventListener('canplay', handleCanPlay);
				};
			}
		}

		loadAudio();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [audioQueue, currentQueuePosition, audioRef]);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume;
		}
	}, [volume, audioRef]);
}
