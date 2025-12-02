'use client';

import PlayerControllers from '@/components/player-controllers';
import SliderComponent from '@/components/song-slider';
import { usePlayerContext } from '@/context/player-context';
import { usePlayer } from '@/hooks/use-player';
import { usePlayerControls } from '@/hooks/use-player-controls';
import { convertDataStreamToImage, secondsToMinutesFormatted } from '@/lib/functions';
import Image from 'next/image';

export default function Player() {
	const {
		audioRef,
		isPlaying,
		isInRepeatMode,
		isInShuffleMode,
		currentlyPlayingAudio,
		currentlyPlayingAudioMetadata,
		currentTime,
		duration,
	} = usePlayerContext();
	const { handlePlayPause, handleNextAudio, handlePreviousAudio, handleRepeat, handleShuffle, handleSeek } =
		usePlayerControls();
	usePlayer();

	return (
		<main className="flex items-center justify-center">
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
							handleNextAudio();
						}
					}}
					className="hidden"
				/>

				{currentlyPlayingAudioMetadata?.albumCoverImage && (
					<Image
						src={convertDataStreamToImage(currentlyPlayingAudioMetadata?.albumCoverImage)}
						alt="Image"
						width={200}
						height={200}
						className="rounded-md object-cover"
					/>
				)}

				<div className="w-full max-w-md text-center">
					{currentlyPlayingAudio ? (
						<div>
							<p className="text-xl font-medium text-foreground truncate">
								{currentlyPlayingAudioMetadata?.title}
							</p>

							<p className="text-m font-medium text-muted-foreground">
								{currentlyPlayingAudioMetadata?.artist}
							</p>

							<p className="text-m font-medium text-muted-foreground">
								{currentlyPlayingAudioMetadata?.album}
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
		</main>
	);
}
