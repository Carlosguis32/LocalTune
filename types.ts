import { AudioFileRecord } from '@/database-types';
import { RefObject } from 'react';

//// TYPES ////

export type RepeatMode = 'off' | 'all' | 'one';

//// INTERFACES ////

export interface PlayerControllersProps {
	isPlaying: boolean;
	isInShuffleMode: boolean;
	repeatMode: RepeatMode;
	audioRef: RefObject<HTMLAudioElement | null>;
	handlePlayPause?: () => void;
	handleShuffle?: () => void;
	handleRepeat?: () => void;
	handleNextAudio?: () => void;
	handlePreviousAudio?: () => void;
}

export interface SliderComponentProps {
	currentTime: number;
	duration: number;
	onSeek: (value: number) => void;
}

export interface AudioElement {
	data: AudioFileRecord;
	ref: RefObject<HTMLAudioElement | null>;
}
