import { PlaylistRecord } from '@/database-types';
import { cn } from '@/lib/utils';
import { Image } from '../image/image';
import { P, Small } from '../ui/typography';

interface PlaylistSmallHorizontalCardProps {
	playlist: PlaylistRecord;
	handlePlaylistClick: (playlist: PlaylistRecord) => void;
}

export function PlaylistSmallHorizontalCard(props: PlaylistSmallHorizontalCardProps) {
	const { playlist, handlePlaylistClick } = props;

	return (
		<div
			key={playlist.id}
			className={cn(
				'group grid grid-cols-[50px_1fr] gap-2 p-1.5 rounded-md cursor-pointer hover:bg-muted-secondary transition-all items-center'
			)}
			onClick={() => handlePlaylistClick(playlist)}
		>
			<Image
				className="aspect-square object-cover rounded-sm w-[50px] h-[50px]"
				src={''}
				alt={'Playlist image'}
				width={50}
				height={50}
			/>
			<div className="min-w-0">
				<P className="truncate">{playlist.name || 'Unnamed Playlist'}</P>
				<Small className="truncate">{playlist.audioFiles?.length || 0} songs</Small>
			</div>
		</div>
	);
}
