import { usePlayerContext } from '@/context/player/player-context';
import { shuffleAudioQueue } from '@/lib/functions';
import { RefObject, useRef } from 'react';

export function usePlayerControls(audioRef: RefObject<HTMLAudioElement | null>) {
	const {
		audioQueue,
		currentQueuePosition,
		repeatMode,
		isInShuffleMode,
		setAudioQueue,
		setCurrentQueuePosition,
		setRepeatMode,
		setIsInShuffleMode,
		setIsPlaying,
		setCurrentTime,
		setVolume,
	} = usePlayerContext();

	const originalQueueRef = useRef<typeof audioQueue | null>(null);

	function handlePlayPause() {
		if (audioRef?.current) {
			// Check if there's a valid source before trying to play
			if (!audioRef.current.src || audioRef.current.src === '') {
				console.warn('No audio source available');
				setIsPlaying(false);
				return;
			}

			if (!audioRef.current.paused) {
				audioRef.current.pause();
				setIsPlaying(false);
			} else {
				audioRef.current.play().catch((e) => {
					console.error('Error playing audio:', e);
					setIsPlaying(false);
				});
				setIsPlaying(true);
			}
		}
	}

	function handleNextAudio() {
		if (!audioQueue) return;
		if (audioQueue.length - 1 > currentQueuePosition) {
			setCurrentQueuePosition(currentQueuePosition + 1);
			setIsPlaying(true);
		} else if (repeatMode === 'all') {
			setCurrentQueuePosition(0);
			setIsPlaying(true);
		}
	}

	function handlePreviousAudio() {
		if (!audioQueue) return;
		if (currentQueuePosition > 0) {
			setCurrentQueuePosition(currentQueuePosition - 1);
			setIsPlaying(true);
		} else if (repeatMode === 'all') {
			setCurrentQueuePosition(audioQueue.length - 1);
			setIsPlaying(true);
		}
	}

	async function handleShuffle() {
		if (!isInShuffleMode) {
			originalQueueRef.current = audioQueue ? [...audioQueue] : null;

			if (audioQueue && audioQueue.length > 1) {
				const currentAudio = audioQueue[currentQueuePosition];
				const restQueue = audioQueue.filter((_, idx) => idx !== currentQueuePosition);
				const shuffledRest = shuffleAudioQueue(restQueue);
				const newQueue = [currentAudio, ...shuffledRest];
				setAudioQueue(newQueue);
				setCurrentQueuePosition(0);
			}
		} else {
			if (originalQueueRef.current) {
				const currentAudio = audioQueue?.[currentQueuePosition];
				setAudioQueue(originalQueueRef.current);
				const idx = originalQueueRef.current.findIndex((item) => item === currentAudio);
				setCurrentQueuePosition(idx >= 0 ? idx : 0);
				originalQueueRef.current = null;
			}
		}
		setIsInShuffleMode(!isInShuffleMode);
	}

	function handleRepeat() {
		if (repeatMode === 'off') setRepeatMode('all');
		else if (repeatMode === 'all') setRepeatMode('one');
		else setRepeatMode('off');
	}

	function handleSongEnd() {
		if (repeatMode === 'one') {
			if (audioRef?.current) {
				audioRef.current.currentTime = 0;
				audioRef.current.play().catch((e) => console.error('Error playing audio:', e));
			}
		} else {
			handleNextAudio();
			setIsPlaying(true);
		}
	}

	function handleSliderSeek(value: number) {
		if (audioRef?.current) {
			audioRef.current.currentTime = value;
			setCurrentTime(value);
		}
	}

	function handleVolumeChange(value: number) {
		setVolume(value);
		if (audioRef?.current) {
			audioRef.current.volume = value;
		}
	}

	return {
		handlePlayPause,
		handleNextAudio,
		handlePreviousAudio,
		handleShuffle,
		handleRepeat,
		handleSongEnd,
		handleSliderSeek,
		handleVolumeChange,
	};
}
