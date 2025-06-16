export interface PlayerControllersProps {
	isPlaying: boolean;
	isInShuffleMode: boolean;
	isInRepeatMode: boolean;
	handlePlayPause: () => void;
	handleShuffle: () => void;
	handleRepeat: () => void;
	handleNextAudio: () => void;
	handlePreviousAudio: () => void;
}

export interface SliderComponentProps {
	currentTime: number;
	duration: number;
	onSeek: (value: number) => void;
}
