import { SpotifyPlaylist } from '@/database-types';
import { cn } from '@/lib/utils';
import { Image } from '../image/image';
import { P, Small } from '../ui/typography';

interface PlaylistSmallHorizontalCardProps {
	playlist: SpotifyPlaylist;
	handlePlaylistClick: (playlist: SpotifyPlaylist) => void;
}

export function PlaylistSmallHorizontalCard(props: PlaylistSmallHorizontalCardProps) {
	const { playlist, handlePlaylistClick } = props;

	const imageUrl = playlist.images?.[0]?.url || '';

	return (
		<div
			key={playlist.id}
			className={cn(
				'group grid grid-cols-[50px_1fr] gap-2 p-1.5 rounded-md cursor-pointer hover:bg-muted-secondary transition-all items-center'
			)}
			onClick={() => handlePlaylistClick(playlist)}
		>
			<Image
				className="aspect-square object-cover rounded-sm w-12.5 h-12.5"
				src={imageUrl}
				alt={playlist.name || 'Playlist image'}
				width={50}
				height={50}
			/>
			<div className="min-w-0">
				<P className="truncate">{playlist.name || 'Unnamed Playlist'}</P>
				<Small className="truncate text-muted-foreground">
					{playlist.tracks.total} {playlist.tracks.total === 1 ? 'song' : 'songs'}
				</Small>
			</div>
		</div>
	);
}
