import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { usePlayerContext } from '@/context/player/player-context';
import { AudioElement } from '@/types';
import { ListMusic, Music, X } from 'lucide-react';
import { H4, P } from '../ui/typography';
import { AudioSmallHorizontalCard } from './audio-small-horizontal-card';

interface AudioQueueProps {
	isOpen: boolean;
	onClose: () => void;
}

export function AudioQueue({ isOpen, onClose }: AudioQueueProps) {
	const { audioQueue, currentQueuePosition, setCurrentQueuePosition, setAudioQueue, setIsPlaying } =
		usePlayerContext();

	function handleAudioClick(index: number) {
		setCurrentQueuePosition(index);
		setIsPlaying(true);
	}

	function handleRemoveAudioButtonClick(e: React.MouseEvent<HTMLButtonElement>, index: number) {
		e.stopPropagation();
		removeFromQueue(index);
	}

	const removeFromQueue = (index: number) => {
		const newQueue = audioQueue.filter((_, i) => i !== index);
		setAudioQueue(newQueue);

		if (index < currentQueuePosition) {
			setCurrentQueuePosition(currentQueuePosition - 1);
		} else if (index === currentQueuePosition && newQueue.length > 0) {
		} else if (index === currentQueuePosition && newQueue.length === 0) {
			setCurrentQueuePosition(0);
		}
	};

	return (
		<div
			className={`pt-16 h-[calc(100vh-4rem)] bg-background border-l border-border flex flex-col transition-all ease-in-out overflow-hidden ${
				isOpen ? 'w-80' : 'w-0'
			}`}
		>
			<div className="flex items-center justify-between px-4 py-2 border-b border-border">
				<H4 className="flex items-center gap-2">
					<ListMusic />
					Queue
				</H4>
				<Button variant="ghost" size="icon" onClick={onClose}>
					<X />
				</Button>
			</div>

			<ScrollArea className="flex-1">
				{audioQueue.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
						<Music className="w-8 h-8 mb-2" />
						<P>No audio/songs in queue</P>
					</div>
				) : (
					<>
						<H4 className="py-2 pb-1 px-4">Now playing:</H4>
						<div className="p-2 pt-0">
							<AudioSmallHorizontalCard
								key={audioQueue[currentQueuePosition].data.id}
								audio={audioQueue[currentQueuePosition]}
								audioIndex={currentQueuePosition}
								handleAudioClick={handleAudioClick}
								handleRemoveAudioButtonClick={handleRemoveAudioButtonClick}
							/>
						</div>

						{currentQueuePosition < audioQueue.length - 1 && (
							<>
								<H4 className="py-2 pb-1 px-4">Next on queue:</H4>
								<div className="p-2 pt-0 space-y-1">
									{audioQueue
										.slice(currentQueuePosition + 1)
										.map((audio: AudioElement, relativeIndex: number) => {
											const index = currentQueuePosition + 1 + relativeIndex;
											return (
												<AudioSmallHorizontalCard
													key={audio.data.id}
													audio={audio}
													audioIndex={index}
													handleAudioClick={handleAudioClick}
													handleRemoveAudioButtonClick={handleRemoveAudioButtonClick}
												/>
											);
										})}
								</div>
							</>
						)}
					</>
				)}
			</ScrollArea>
		</div>
	);
}
