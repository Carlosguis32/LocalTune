export interface PlayerControllersProps {
	isPlaying: boolean;
	isInModeShuffle: boolean;
	isInModeRepeat: boolean;
	handlePlayPause: () => void;
	handleShuffle: () => void;
	handleRepeat: () => void;
	handleNextAudio: () => void;
	handlePreviousAudio: () => void;
}

export interface PlayerState {
	queueState: string[];
	shuffleState: boolean;
	repeatState: boolean;
	audioNameState: string;
	queueIndexState: number;
}

export interface SliderComponentProps {
	currentTime: number;
	duration: number;
	onSeek: (value: number) => void;
}
