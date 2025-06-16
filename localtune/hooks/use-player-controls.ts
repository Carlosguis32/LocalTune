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
		if (audioQueue && currentQueuePosition < audioQueue.length) {
			setCurrentQueuePosition(currentQueuePosition + 1);

			if (audioRef.current) {
				if (isPlaying) {
					audioRef.current.pause();
					audioRef.current.play();
				} else {
					audioRef.current.play();
				}
			}
		}
	}

	function handlePreviousAudio() {
		if (audioQueue && currentQueuePosition > 0) {
			setCurrentQueuePosition(currentQueuePosition - 1);

			if (audioRef.current) {
				if (isPlaying) {
					audioRef.current.pause();
					audioRef.current.play();
				} else {
					audioRef.current.play();
				}
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
