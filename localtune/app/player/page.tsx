'use client';

import PlayerControllers from '@/components/player-controllers';
import SliderComponent from '@/components/song-slider';
import { secondsToMinutesFormatted } from '@/lib/functions';
import { usePlayerContext } from '@/context/player-context';
import { usePlayerControls } from '@/hooks/use-player-controls';
import { usePlayer } from '@/hooks/use-player';

export default function Player() {
	const {
		audioRef,
		isPlaying,
		isInRepeatMode,
		isInShuffleMode,
		currentlyPlayingAudio,
		currentQueuePosition,
		currentTime,
		duration,
		setCurrentQueuePosition,
	} = usePlayerContext();
	const { handlePlayPause, handleNextAudio, handlePreviousAudio, handleRepeat, handleShuffle, handleSeek } =
		usePlayerControls();
	usePlayer();

	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<div className="flex flex-col items-center justify-center w-full max-w-md gap-8 p-6 bg-black/90 border rounded-xl border-neutral-800/40 shadow-[0px_20px_20px_0px_rgba(0,0,0,0.8)] hover:shadow-[0px_40px_40px_0px_rgba(0,0,0,1)] transition-all duration-300">
				<audio
					ref={audioRef}
					onEnded={() => {
						if (isInRepeatMode) {
							if (audioRef.current) {
								audioRef.current.currentTime = 0;
								audioRef.current.play().catch((e) => console.error('Error playing audio:', e));
							}
						} else {
							setCurrentQueuePosition(currentQueuePosition + 1);
						}
					}}
					className="hidden"
				/>

				<div className="w-[400px]">
					<img src="src\assets\AlbumImageTest.jpg" alt="Image" className="rounded-md object-cover" />
				</div>

				<div className="w-full max-w-md text-center">
					{currentlyPlayingAudio ? (
						<div>
							<p className="text-xl font-medium text-foreground truncate">
								{currentlyPlayingAudio.replace(/\.[^/.]+$/, '')}
							</p>

							<p className="text-m font-medium text-muted-foreground">
								{currentlyPlayingAudio.replace(/\.[^/.]+$/, '')}
							</p>
						</div>
					) : (
						<p className="h-7" />
					)}
				</div>
				<div className="w-full max-w-md flex flex-col gap-8">
					<div className="flex items-center justify-between gap-4">
						<p className="text-sm text-muted-foreground min-w-[3ch]">
							{secondsToMinutesFormatted(currentTime) || '0:00'}
						</p>

						<div className="flex-grow">
							<SliderComponent currentTime={currentTime} duration={duration} onSeek={handleSeek} />
						</div>

						<p className="text-sm text-muted-foreground min-w-[3ch]">
							{secondsToMinutesFormatted(duration) || '0:00'}
						</p>
					</div>

					<div className="flex justify-center">
						<PlayerControllers
							isPlaying={isPlaying}
							isInShuffleMode={isInShuffleMode}
							isInRepeatMode={isInRepeatMode}
							handlePlayPause={handlePlayPause}
							handleShuffle={handleShuffle}
							handleRepeat={handleRepeat}
							handleNextAudio={handleNextAudio}
							handlePreviousAudio={handlePreviousAudio}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
