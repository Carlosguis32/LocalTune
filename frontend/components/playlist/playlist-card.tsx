import { PlaylistRecord } from '@/database-types';
import { cn } from '@/lib/utils';
import { Image } from '../image/image';
import { P, Small } from '../ui/typography';
import Link from 'next/link';

interface PlaylistCardProps {
	playlist: PlaylistRecord;
	className?: string;
	onClick?: () => void;
}

export function PlaylistCard(props: PlaylistCardProps) {
	const { playlist, className, onClick } = props;

	return (
		<Link
			href={`/playlist/${playlist.id}`}
			className={cn(
				'group flex flex-col gap-2 p-3 rounded-md cursor-pointer hover:bg-muted-secondary transition-all',
				className
			)}
			onClick={onClick}
		>
			<Image
				className="aspect-square object-cover rounded-md w-full"
				src={''}
				alt={'Playlist image'}
				width={200}
				height={200}
			/>
			<div className="min-w-0">
				<P className="truncate">{playlist.name || 'Unnamed Playlist'}</P>
				<Small className="truncate">{playlist.audioFiles?.length || 0} songs</Small>
			</div>
		</Link>
	);
}
