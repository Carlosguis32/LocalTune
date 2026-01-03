import { SpotifyPlaylist } from '@/database-types';
import { cn } from '@/lib/utils';
import { Image } from '../image/image';
import { P, Small } from '../ui/typography';
import Link from 'next/link';
import { Music } from 'lucide-react';

interface PlaylistCardProps {
	playlist: SpotifyPlaylist;
	className?: string;
	onClick?: () => void;
}

export function PlaylistCard(props: PlaylistCardProps) {
	const { playlist, className, onClick } = props;

	// Obtener la imagen de la playlist (usar la primera si existe)
	const imageUrl = playlist.images?.[0]?.url || '';
	const isLocalPlaylist = playlist.id === 'local-files';

	return (
		<Link
			href={`/playlist/${playlist.id}`}
			className={cn(
				'group flex flex-col gap-2 p-3 rounded-md cursor-pointer hover:bg-muted-secondary transition-all',
				className
			)}
			onClick={onClick}
		>
			{isLocalPlaylist ? (
				<div className="aspect-square w-full rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
					<Music className="w-20 h-20 text-white" />
				</div>
			) : (
				<Image
					className="aspect-square object-cover rounded-md w-full"
					src={imageUrl}
					alt={playlist.name || 'Playlist image'}
					width={200}
					height={200}
				/>
			)}
			<div className="min-w-0">
				<P className="truncate">{playlist.name || 'Unnamed Playlist'}</P>
				<Small className="truncate text-muted-foreground">
					{playlist.tracks.total} {playlist.tracks.total === 1 ? 'song' : 'songs'}
				</Small>
			</div>
		</Link>
	);
}
