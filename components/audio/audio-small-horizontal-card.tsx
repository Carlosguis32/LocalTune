import { usePlayerContext } from '@/context/player/player-context';
import { cn } from '@/lib/utils';
import { AudioElement } from '@/types';
import { X } from 'lucide-react';
import { Image } from '../image/image';
import { Button } from '../ui/button';
import { P, Small } from '../ui/typography';

interface AudioSmallHorizontalCardProps {
	className?: string;
	audio: AudioElement;
	audioIndex: number;
	handleAudioClick: (index: number) => void;
	handleRemoveAudioButtonClick: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
}

export function AudioSmallHorizontalCard(props: AudioSmallHorizontalCardProps) {
	const { className, audio, audioIndex, handleAudioClick, handleRemoveAudioButtonClick } = props;
	const { currentQueuePosition } = usePlayerContext();

	return (
		<div
			key={audio.data.id}
			className={cn(
				'group grid gap-2 p-1 rounded-md cursor-pointer hover:bg-muted-secondary transition-all items-center',
				audioIndex !== currentQueuePosition ? 'grid-cols-[50px_1fr_auto]' : 'grid-cols-[50px_1fr]',
				className
			)}
			onClick={() => handleAudioClick(audioIndex)}
		>
			<Image
				className="aspect-square object-cover rounded-sm w-11.25 h-11.25"
				src={''}
				alt={'Playlist image'}
				width={45}
				height={45}
			/>

			<div className="min-w-0">
				<P className={`${audioIndex === currentQueuePosition && 'text-primary-custom'} truncate`}>
					{audio.data.title || audio.data.path?.split('\\').pop() || 'Unknown'}
				</P>
				<Small className="truncate">{audio.data.artist || 'Unknown Artist'}</Small>
			</div>

			{audioIndex !== currentQueuePosition && (
				<Button
					variant="ghost"
					size="icon"
					className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
					onClick={(e) => {
						handleRemoveAudioButtonClick(e, audioIndex);
					}}
				>
					<X className="w-3 h-3" />
				</Button>
			)}
		</div>
	);
}
