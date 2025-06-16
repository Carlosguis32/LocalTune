import { usePlayerContext } from '@/context/player-context';
import { shuffleArray } from '@/lib/functions';

export function usePlayerControls() {
	const {
		audioRef,
		audioQueue,
		audioFoldersFilenames,
		isPlaying,
		isInRepeatMode,
		isInShuffleMode,
		currentQueuePosition,
		setAudioQueue,
		setIsPlaying,
		setIsInRepeatMode,
		setIsInShuffleMode,
		setCurrentQueuePosition,
		setCurrentTime,
	} = usePlayerContext();

	function handlePlayPause() {
		console.log(audioRef.current);
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
				setIsPlaying(false);
			} else {
				audioRef.current.play();
				setIsPlaying(true);
			}
		}
	}

	function handleNextAudio() {
		if (audioQueue && currentQueuePosition < audioQueue.length - 1) {
			const wasPlaying = isPlaying;

			if (!isInRepeatMode) {
				setCurrentQueuePosition(currentQueuePosition + 1);
			}

			if (wasPlaying && audioRef.current) {
				setTimeout(() => {
					if (audioRef.current) {
						audioRef.current.play().catch((e) => console.error('Error playing audio:', e));
					}
				}, 100);
			}
		} else {
			setIsPlaying(false);
			if (audioRef.current) {
				audioRef.current.pause();
			}
		}
	}

	function handlePreviousAudio() {
		if (audioQueue && currentQueuePosition > 0) {
			const wasPlaying = isPlaying;
			setCurrentQueuePosition(currentQueuePosition - 1);

			if (wasPlaying && audioRef.current) {
				setTimeout(() => {
					if (audioRef.current) {
						audioRef.current.play().catch((e) => console.error('Error playing audio:', e));
					}
				}, 100);
			}
		}
	}

	function handleShuffle() {
		if (audioFoldersFilenames) {
			if (!isInShuffleMode) {
				setCurrentQueuePosition(0);
				setAudioQueue(shuffleArray(audioFoldersFilenames));
			} else {
				setCurrentQueuePosition(audioFoldersFilenames.indexOf(audioQueue[currentQueuePosition]));
				setAudioQueue(audioFoldersFilenames);
			}
		}

		setIsInShuffleMode(!isInShuffleMode);
	}

	function handleRepeat() {
		setIsInRepeatMode(!isInRepeatMode);
	}

	function handleSeek(value: number) {
		if (audioRef.current) {
			audioRef.current.currentTime = value;
			setCurrentTime(value);
		}
	}

	return { handlePlayPause, handleNextAudio, handlePreviousAudio, handleShuffle, handleRepeat, handleSeek };
}
