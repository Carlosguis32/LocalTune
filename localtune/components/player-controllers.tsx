import { PlayerControllersProps } from '@/types';
import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react';
import { Button } from './ui/button';

function PlayerControllers({
	isPlaying,
	isInShuffleMode,
	isInRepeatMode,
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
				variant={isInShuffleMode ? 'outline' : 'default'}
				size="icon"
				className="w-10 h-10 rounded-full"
			>
				<Shuffle className="w-5 h-5" />
			</Button>

			<Button onClick={handlePreviousAudio} variant="default" size="icon" className="w-10 h-10 rounded-full">
				<SkipBack className="w-5 h-5" />
			</Button>

			<Button onClick={handlePlayPause} variant="default" size="icon" className="w-12 h-12 rounded-full">
				{isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
			</Button>

			<Button onClick={handleNextAudio} variant="default" size="icon" className="w-10 h-10 rounded-full">
				<SkipForward className="w-5 h-5" />
			</Button>

			<Button
				onClick={handleRepeat}
				variant={isInRepeatMode ? 'outline' : 'default'}
				size="icon"
				className="w-10 h-10 rounded-full"
			>
				<Repeat className="w-5 h-5" />
			</Button>
		</div>
	);
}

export default PlayerControllers;
