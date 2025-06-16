import { usePlayerContext } from '@/context/player-context';
import { useEffect } from 'react';

export function usePlayer() {
	const {
		audioFilesFolders,
		audioFoldersFilenames,
		audioRef,
		audioQueue,
		currentQueuePosition,
		setAudioFoldersFilenames,
		setCurrentlyPlayingAudio,
		setCurrentTime,
		setDuration,
	} = usePlayerContext();

	useEffect(() => {
		if (audioRef.current) {
			const audio = audioRef.current;

			const handleTimeUpdate = () => {
				setCurrentTime(audio.currentTime);
			};

			const handleDurationChange = () => {
				setDuration(audio.duration);
			};

			audio.addEventListener('timeupdate', handleTimeUpdate);
			audio.addEventListener('durationchange', handleDurationChange);

			return () => {
				audio.removeEventListener('timeupdate', handleTimeUpdate);
				audio.removeEventListener('durationchange', handleDurationChange);
			};
		}
	}, [audioRef, setCurrentTime, setDuration]);

	useEffect(() => {
		const audioName = audioQueue[currentQueuePosition];

		const fullPath = `${audioFilesFolders}\\${audioName}`;

		if (audioRef.current && audioFoldersFilenames.length > 0) {
			audioRef.current.src = `http://localhost:8571/api/audio/${encodeURIComponent(fullPath)}`;

			setCurrentlyPlayingAudio(audioName);
		}
	}, [
		audioFilesFolders,
		audioFoldersFilenames.length,
		audioQueue,
		audioRef,
		currentQueuePosition,
		setCurrentlyPlayingAudio,
	]);

	useEffect(() => {
		fetchAudioFiles();
	}, []);

	async function fetchAudioFiles() {
		try {
			const response = await fetch(
				`http://localhost:8571/api/audio-folder/${encodeURIComponent(audioFilesFolders[0])}`
			);

			if (!response.ok) {
				throw new Error('Error fetching audio files');
			}

			const data = await response.json();

			setAudioFoldersFilenames(data);
		} catch (error) {
			console.error('Error:', error);
		}
	}

	return { fetchAudioFiles };
}
