import { usePlayerContext } from '@/context/player-context';
import { API_BASE_URL } from '@/lib/constants';
import { useCallback, useEffect } from 'react';

/**
 * Custom hook for managing audio player functionality.
 * Handles fetching audio files, setting up audio events, and updating metadata.
 */
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

	// Update currentTime and duration every 1 second for efficiency
	useEffect(() => {
		if (audioRef.current) {
			const interval = setInterval(() => {
				const audio = audioRef.current;

				if (audio) {
					setCurrentTime(audio.currentTime);
					setDuration(audio.duration);
				}
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [audioRef, setCurrentTime, setDuration]);

	// Fetch and set metadata for the currently playing audio
	useEffect(() => {
		if (audioFilesFolders[0] && audioFoldersFilenames[0]) {
			const encodedFolder = encodeURIComponent(audioFilesFolders[0]);
			const encodedFilename = encodeURIComponent(audioQueue[currentQueuePosition]);

			fetch(`${API_BASE_URL}/audio/metadata/${encodedFolder}/${encodedFilename}`)
				.then((response) => response.json())
				.then((metadata) => {
					setCurrentlyPlayingAudioMetadata(metadata);
				});
		}
	}, [audioFilesFolders, audioFoldersFilenames, audioQueue, currentQueuePosition, setCurrentlyPlayingAudioMetadata]);

	// Set the audio source and currently playing audio when queue position changes
	useEffect(() => {
		const audioName = audioQueue[currentQueuePosition];

		if (audioFilesFolders[0] && audioName) {
			if (audioRef.current) {
				audioRef.current.src = `${API_BASE_URL}/audio/file/${encodeURIComponent(
					audioFilesFolders[0]
				)}/${encodeURIComponent(audioName)}`;
				setCurrentlyPlayingAudio(audioName);
			}
		}
	}, [audioFilesFolders, audioQueue, audioRef, currentQueuePosition, setCurrentlyPlayingAudio]);

	/**
	 * Fetches the list of audio files from the configured folder and populates the queue.
	 * Clears the queue if no folder is configured.
	 */
	const fetchAudioFiles = useCallback(async () => {
		try {
			if (!audioFilesFolders[0]) {
				setAudioFoldersFilenames([]);
				setAudioQueue([]);
				return;
			}

			const response = await fetch(`${API_BASE_URL}/audio/folder/${encodeURIComponent(audioFilesFolders[0])}`);

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(`Error fetching audio files: ${response.status} ${response.statusText} - ${errorText}`);
			}

			const data = await response.json();
			setAudioFoldersFilenames(data);
			setAudioQueue(data);
		} catch (error) {
			console.error('Error fetching audio files:', error);
			setAudioFoldersFilenames([]);
			setAudioQueue([]);
		}
	}, [audioFilesFolders, setAudioFoldersFilenames, setAudioQueue]);

	useEffect(() => {
		if (audioFilesFolders.length > 0 && audioFilesFolders[0]) {
			fetchAudioFiles();
		}
	}, [audioFilesFolders, fetchAudioFiles]);
}
