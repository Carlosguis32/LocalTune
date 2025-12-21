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
		setAudioQueue,
		setCurrentlyPlayingAudio,
		setCurrentlyPlayingAudioMetadata,
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
		if (audioFilesFolders[0] && audioFoldersFilenames[0]) {
			const encodedFolder = encodeURIComponent(audioFilesFolders[0]);
			const encodedFilename = encodeURIComponent(audioQueue[currentQueuePosition]);

			fetch(`http://localhost:8571/api/audio/metadata/${encodedFolder}/${encodedFilename}`)
				.then((response) => response.json())
				.then((metadata) => {
					setCurrentlyPlayingAudioMetadata(metadata);
				});
		}
	}, [audioFilesFolders, audioFoldersFilenames, audioQueue, currentQueuePosition, setCurrentlyPlayingAudioMetadata]);

	useEffect(() => {
		const audioName = audioQueue[currentQueuePosition];

		if (audioFilesFolders[0] && audioName) {
			const fullPath = `${audioFilesFolders[0]}\\${audioName}`;

			if (audioRef.current) {
				audioRef.current.src = `http://localhost:8571/api/audio/${encodeURIComponent(fullPath)}`;
				setCurrentlyPlayingAudio(audioName);
			}
		}
	}, [
		audioFilesFolders,
		audioQueue,
		audioRef,
		currentQueuePosition,
		setCurrentlyPlayingAudio,
	]);

	useEffect(() => {
		console.log('use-player useEffect triggered, audioFilesFolders:', audioFilesFolders);
		if (audioFilesFolders.length > 0 && audioFilesFolders[0]) {
			console.log('Calling fetchAudioFiles');
			fetchAudioFiles();
		}
	}, [audioFilesFolders]);

	async function fetchAudioFiles() {
		try {
			console.log('fetchAudioFiles called with audioFilesFolders:', audioFilesFolders);

			if (!audioFilesFolders[0]) {
				console.warn('No music path configured. Please set a music path in settings.');
				setAudioFoldersFilenames([]);
				setAudioQueue([]);
				return;
			}

			console.log('Fetching from path:', audioFilesFolders[0]);

			const response = await fetch(
				`http://localhost:8571/api/audio-folder/${encodeURIComponent(audioFilesFolders[0])}`
			);

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(`Error fetching audio files: ${response.status} ${response.statusText} - ${errorText}`);
			}

			const data = await response.json();
			console.log('Fetched data:', data.length, 'files');

			setAudioFoldersFilenames(data);
			setAudioQueue(data); // Populate the queue with all songs
			console.log('Queue populated with', data.length, 'songs');
		} catch (error) {
			console.error('Error fetching audio files:', error);
			setAudioFoldersFilenames([]);
			setAudioQueue([]);
		}
	}

	return { fetchAudioFiles };
}
