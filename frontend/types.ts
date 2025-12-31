import { AudioFileRecord } from '@/database-types';
import { RefObject } from 'react';

export interface PlayerControllersProps {
	isPlaying: boolean;
	isInShuffleMode: boolean;
	repeatMode: 'off' | 'all' | 'one';
	audioRef: RefObject<HTMLAudioElement | null>;
}

export interface SliderComponentProps {
	currentTime: number;
	duration: number;
	onSeek: (value: number) => void;
}

export interface AudioElement {
	data: AudioFileRecord;
	ref: RefObject<HTMLAudioElement>;
}
