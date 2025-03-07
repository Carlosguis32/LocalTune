import { PlayerControllersProps } from '../../Types';
import { Button } from '../ui/button';
import {
	IconArrowsShuffle2,
	IconPlayerPause,
	IconPlayerPlay,
	IconPlayerTrackNext,
	IconPlayerTrackPrev,
	IconRepeat,
} from '@tabler/icons-react';

function PlayerControllers({
	isPlaying,
	isInModeShuffle,
	isInModeRepeat,
	handlePlayPause,
	handleShuffle,
	handleRepeat,
	handleNextAudio,
	handlePreviousAudio,
}: PlayerControllersProps) {
	return (
		<div className="flex items-center justify-center gap-2">
			<Button
				onClick={handleShuffle}
				variant={isInModeShuffle ? 'outline' : 'default'}
				size="icon"
				className="w-10 h-10 rounded-full"
			>
				<IconArrowsShuffle2 className="w-5 h-5" />
			</Button>

			<Button
				onClick={handlePreviousAudio}
				variant="default"
				size="icon"
				className="w-10 h-10 rounded-full"
			>
				<IconPlayerTrackPrev className="w-5 h-5" />
			</Button>

			<Button
				onClick={handlePlayPause}
				variant="default"
				size="icon"
				className="w-12 h-12 rounded-full"
			>
				{isPlaying ? (
					<IconPlayerPause className="w-6 h-6" />
				) : (
					<IconPlayerPlay className="w-6 h-6" />
				)}
			</Button>

			<Button
				onClick={handleNextAudio}
				variant="default"
				size="icon"
				className="w-10 h-10 rounded-full"
			>
				<IconPlayerTrackNext className="w-5 h-5" />
			</Button>

			<Button
				onClick={handleRepeat}
				variant={isInModeRepeat ? 'outline' : 'default'}
				size="icon"
				className="w-10 h-10 rounded-full"
			>
				<IconRepeat className="w-5 h-5" />
			</Button>
		</div>
	);
}

export default PlayerControllers;
