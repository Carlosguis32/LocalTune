export interface AudioMetadata {
	id: string;
	title: string;
	artist: string;
	album: string;
	albumCoverImage: string;
	platformIds: Record<string, string>;
}

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
