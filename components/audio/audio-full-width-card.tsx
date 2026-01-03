'use client';

import { usePlayerContext } from '@/context/player/player-context';
import { cn } from '@/lib/utils';
import { AudioFileRecord } from '@/database-types';
import { Image } from '../image/image';
import { P, Small } from '../ui/typography';
import { Play, Pause } from 'lucide-react';
import { secondsToMinutesFormatted } from '@/lib/functions';

interface AudioFullWidthCardProps {
	className?: string;
	audio: AudioFileRecord;
	audioIndex: number;
	onClick?: () => void;
	isActive?: boolean;
}

export function AudioFullWidthCard(props: AudioFullWidthCardProps) {
	const { className, audio, audioIndex, onClick, isActive } = props;
	const { currentQueuePosition, isPlaying, audioQueue } = usePlayerContext();

	const isCurrentSong = audioIndex === currentQueuePosition && audioQueue.length > 0;
	const isPlayingThis = isCurrentSong && isPlaying;

	return (
		<div
			className={cn(
				'group grid grid-cols-[50px_4fr_3fr_minmax(120px,1fr)] gap-3 p-2 rounded-md cursor-pointer hover:bg-muted-secondary transition-all duration-200 items-center',
				isCurrentSong && 'bg-muted-secondary',
				className
			)}
			onClick={onClick}
		>
			{/* Index / Play Icon */}
			<div className="flex items-center justify-center relative">
				<span
					className={cn(
						'text-muted-foreground text-sm font-medium group-hover:hidden',
						isCurrentSong && 'text-primary-custom'
					)}
				>
					{audioIndex + 1}
				</span>
				{isPlayingThis ? (
					<Pause className="size-4 text-foreground hidden group-hover:block" />
				) : (
					<Play className="size-4 text-foreground hidden group-hover:block fill-current" />
				)}
			</div>

			{/* Album Cover + Title */}
			<div className="flex items-center gap-3 min-w-0">
				<Image
					className="aspect-square object-cover rounded-sm w-10 h-10 shrink-0"
					src={''}
					alt={'Album cover'}
					width={40}
					height={40}
				/>
				<div className="min-w-0 flex flex-col justify-center">
					<P className={cn('truncate', isCurrentSong && 'text-primary-custom')}>
						{audio.title || audio.path?.split('\\').pop() || 'Unknown'}
					</P>
				</div>
			</div>

			{/* Artist */}
			<div className="min-w-0 hidden sm:block">
				<Small className="truncate text-muted-foreground hover:text-foreground hover:underline">
					{audio.artist || 'Unknown Artist'}
				</Small>
			</div>

			{/* Duration */}
			<div className="min-w-0 hidden md:flex justify-end">
				<Small className="text-muted-foreground">{secondsToMinutesFormatted(audio.duration || 0)}</Small>
			</div>
		</div>
	);
}
