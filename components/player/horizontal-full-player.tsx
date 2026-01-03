import { usePlayerContext } from '@/context/player/player-context';
import { usePlayer } from '@/hooks/player/use-player';
import { usePlayerControls } from '@/hooks/player/use-player-controls';
import { secondsToMinutesFormatted } from '@/lib/functions';
import { ListMusic, Volume2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { H5, Small } from '../ui/typography';
import { PlayerControllers } from './player-controllers';
import { SliderComponent } from './song-slider';
import { VolumeSlider } from './volume-slider';

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

		const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
		const handleLoadedMetadata = () => setDuration(audio.duration);
		const handlePlay = () => setIsPlaying(true);
		const handlePause = () => setIsPlaying(false);
		const handleError = (e: Event) => {
			const target = e.target as HTMLAudioElement;
			if (target.error) {
				const errorMessages: { [key: number]: string } = {
					1: 'MEDIA_ERR_ABORTED - The user aborted the video playback',
					2: 'MEDIA_ERR_NETWORK - A network error occurred while fetching the media',
					3: 'MEDIA_ERR_DECODE - An error occurred while decoding the media',
					4: 'MEDIA_ERR_SRC_NOT_SUPPORTED - The media source is not supported',
				};

				console.error('Audio element error occurred');
				console.error('Error code:', target.error.code);
				console.error('Error type:', errorMessages[target.error.code] || 'Unknown error');
				console.error('Error message:', target.error.message);
				console.error('Current src:', target.src);
				console.error('Current queue position:', currentQueuePosition);
				console.error('Current track:', audioQueue[currentQueuePosition]?.data);

				// Stop playback on error
				setIsPlaying(false);
			}
		};
		const handleLoadError = () => {
			console.error('Failed to load audio source');
			console.error('Current src:', audio.src);
			setIsPlaying(false);
		};

		audio.addEventListener('timeupdate', handleTimeUpdate);
		audio.addEventListener('loadedmetadata', handleLoadedMetadata);
		audio.addEventListener('play', handlePlay);
		audio.addEventListener('pause', handlePause);
		audio.addEventListener('error', handleError);
		audio.addEventListener('stalled', handleLoadError);

		return () => {
			audio.removeEventListener('timeupdate', handleTimeUpdate);
			audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
			audio.removeEventListener('play', handlePlay);
			audio.removeEventListener('pause', handlePause);
			audio.removeEventListener('error', handleError);
			audio.removeEventListener('stalled', handleLoadError);
		};
	}, [setCurrentTime, setDuration, setIsPlaying]);

	return (
		<main className="fixed bottom-0 left-0 w-full h-24 bg-black border-t border-border z-50">
			<audio ref={audioRef} onEnded={handleSongEnd} className="hidden" />
			<div className="flex flex-row items-center justify-between w-full h-full mx-auto px-6 py-3 gap-4">
				<div className="flex items-center min-w-0 gap-4 w-1/3">
					<Image
						src={'/placeholder.webp'}
						alt="Album Cover"
						width={56}
						height={56}
						className="rounded object-cover aspect-square"
					/>

					<div className="flex flex-col min-w-0">
						<H5>
							{audioQueue[currentQueuePosition]?.data?.title ||
								audioQueue[currentQueuePosition]?.data?.path?.split('\\').pop() ||
								'Unknown'}
						</H5>
						<Small>{audioQueue[currentQueuePosition]?.data?.artist || 'Unknown Artist'}</Small>
						<Small>{audioQueue[currentQueuePosition]?.data?.album || 'Unknown Album'}</Small>
					</div>
				</div>

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
						<Small>{secondsToMinutesFormatted(currentTime)}</Small>
						<SliderComponent currentTime={currentTime} duration={duration} onSeek={handleSliderSeek} />
						<Small>{secondsToMinutesFormatted(duration)}</Small>
					</div>
				</div>

				<div className="flex items-center justify-end w-1/3 min-w-0 gap-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsQueueOpen(!isQueueOpen)}
						className={`${isQueueOpen && 'bg-accent'}`}
					>
						<ListMusic className="text-foreground" />
					</Button>
					<Volume2 className="w-4 h-4" />
					<VolumeSlider volume={volume} onVolumeChange={handleVolumeChange} />
				</div>
			</div>
		</main>
	);
}
