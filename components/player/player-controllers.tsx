import { usePlayerControls } from '@/hooks/player/use-player-controls';
import { PlayerControllersProps } from '@/types';
import { Pause, Play, Repeat, Repeat1, Shuffle, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '../ui/button';

export function PlayerControllers({ isPlaying, isInShuffleMode, repeatMode, audioRef }: PlayerControllersProps) {
	const { handlePlayPause, handleNextAudio, handlePreviousAudio, handleRepeat, handleShuffle } =
		usePlayerControls(audioRef);

	return (
		<div className="flex items-center justify-center gap-2">
			<Button
				onClick={handleShuffle}
				variant={isInShuffleMode ? 'ghost' : 'default'}
				size="icon"
				className="w-8 h-8 rounded-full"
			>
				<Shuffle className="text-foreground" strokeWidth={3} />
			</Button>

			<Button onClick={handlePreviousAudio} variant="ghost" size="icon" className="w-8 h-8 rounded-full">
				<SkipBack className="text-foreground fill-foreground" strokeWidth={3} />
			</Button>

			<Button onClick={handlePlayPause} variant="default" size="icon" className="w-10 h-10 rounded-full">
				{isPlaying ? (
					<Pause className="text-foreground fill-foreground" />
				) : (
					<Play className="w-6 h-6 text-foreground fill-foreground" strokeWidth={3} />
				)}
			</Button>

			<Button onClick={handleNextAudio} variant="ghost" size="icon" className="w-8 h-8 rounded-full">
				<SkipForward className="text-foreground fill-foreground" strokeWidth={3} />
			</Button>

			<Button
				onClick={handleRepeat}
				variant={repeatMode === 'all' || repeatMode === 'one' ? 'default' : 'ghost'}
				size="icon"
				className="w-8 h-8 rounded-full"
			>
				{(repeatMode === 'all' || repeatMode === 'off') && (
					<Repeat className="text-foreground" strokeWidth={3} />
				)}
				{repeatMode === 'one' && <Repeat1 className="text-foreground" strokeWidth={3} />}
			</Button>
		</div>
	);
}
