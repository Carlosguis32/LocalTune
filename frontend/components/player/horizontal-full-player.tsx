import { usePlayerContext } from '@/context/player/player-context';
import { usePlayer } from '@/hooks/player/use-player';
import { usePlayerControls } from '@/hooks/player/use-player-controls';
import { secondsToMinutesFormatted } from '@/lib/functions';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Volume2, ListMusic } from 'lucide-react';
import { SliderComponent } from '../song-slider';
import { VolumeSlider } from '../volume-slider';
import { Button } from '../ui/button';
import { P, Small } from '../ui/typography';
import { PlayerControllers } from './player-controllers';

export function HorizontalFullPlayer() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const {
		audioQueue,
		currentQueuePosition,
		repeatMode,
		isInShuffleMode,
		isPlaying,
		currentTime,
		duration,
		volume,
		isQueueOpen,
		setIsPlaying,
		setCurrentTime,
		setDuration,
		setIsQueueOpen,
	} = usePlayerContext();
	const { handleSongEnd, handleSliderSeek, handleVolumeChange } = usePlayerControls(audioRef);

	usePlayer(audioRef);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const interval = setInterval(() => {
			setCurrentTime(audio.currentTime);
			setDuration(audio.duration);
			setIsPlaying(!audio.paused);
		}, 10);

		return () => clearInterval(interval);
	}, [currentQueuePosition, setCurrentTime, setDuration, setIsPlaying]);

	return (
		<main className="fixed bottom-0 left-0 w-full bg-black border-t border-border z-50">
			<audio ref={audioRef} onEnded={handleSongEnd} className="hidden" />
			<div className="flex flex-row items-center justify-between w-full mx-auto px-6 py-3 gap-4">
				{/* Carátula e info */}
				<div className="flex items-center min-w-0 gap-4 w-1/3">
					<Image
						src={'/placeholder.webp'}
						alt="Album Cover"
						width={56}
						height={56}
						className="rounded object-cover aspect-square"
					/>

					<div className="flex flex-col min-w-0">
						<P>
							{audioQueue[currentQueuePosition]?.data?.title ||
								audioQueue[currentQueuePosition]?.data?.path?.split('\\').pop() ||
								'Unknown'}
						</P>
						<Small>{audioQueue[currentQueuePosition]?.data?.artist || 'Unknown Artist'}</Small>
						<Small>{audioQueue[currentQueuePosition]?.data?.album || 'Unknown Album'}</Small>
					</div>
				</div>

				{/* Controles */}
				<div className="flex flex-col items-center w-1/3 min-w-0">
					<div className="flex justify-center mb-1">
						<PlayerControllers
							isPlaying={isPlaying}
							isInShuffleMode={isInShuffleMode}
							repeatMode={repeatMode}
							audioRef={audioRef}
						/>
					</div>
					<div className="flex items-center w-full gap-2">
						<span className="text-xs text-muted-foreground min-w-[3ch]">
							{secondsToMinutesFormatted(currentTime)}
						</span>
						<SliderComponent currentTime={currentTime} duration={duration} onSeek={handleSliderSeek} />
						<span className="text-xs text-muted-foreground min-w-[3ch]">
							{secondsToMinutesFormatted(duration)}
						</span>
					</div>
				</div>

				{/* Controles de volumen y queue */}
				<div className="flex items-center justify-end w-1/3 min-w-0 gap-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsQueueOpen(!isQueueOpen)}
						className="w-8 h-8 hover:bg-accent"
					>
						<ListMusic className="w-4 h-4 text-white hover:!text-black" />
					</Button>
					<Volume2 className="w-5 h-5 text-muted-foreground" />
					<VolumeSlider volume={volume} onVolumeChange={handleVolumeChange} />
				</div>
			</div>
		</main>
	);
}
