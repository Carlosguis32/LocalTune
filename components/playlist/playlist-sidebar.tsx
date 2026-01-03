import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SpotifyPlaylist } from '@/database-types';
import { getSpotifyPlaylists } from '@/lib/api/spotify';
import { Library, ListMusic, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { H4, P, Small } from '../ui/typography';
import { PlaylistSmallHorizontalCard } from './playlist-small-horizontal-card';
import { useSpotifyAuth } from '@/context/spotify/spotify-auth-context';

interface PlaylistSidebarProps {
	isOpen: boolean;
	onClose: () => void;
	onPlaylistSelect?: (playlist: SpotifyPlaylist) => void;
}

export function PlaylistSidebar({ isOpen, onClose, onPlaylistSelect }: PlaylistSidebarProps) {
	const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const { isAuthenticated } = useSpotifyAuth();

	async function loadPlaylists() {
		if (!isAuthenticated) return;

		try {
			setIsLoading(true);
			const fetchedPlaylists = await getSpotifyPlaylists();
			setPlaylists(fetchedPlaylists);
		} catch (error) {
			console.error('Failed to load playlists:', error);
		} finally {
			setIsLoading(false);
		}
	}

	function handlePlaylistClick(playlist: SpotifyPlaylist) {
		onPlaylistSelect?.(playlist);
	}

	useEffect(() => {
		if (isOpen) {
			loadPlaylists();
		}
	}, [isOpen, isAuthenticated]);

	return (
		<div
			className={`pt-16 h-[calc(100vh-4rem)] bg-background border-r border-border flex flex-col transition-all ease-in-out overflow-hidden ${
				isOpen ? 'w-80' : 'w-0'
			}`}
		>
			<div className="flex items-center justify-between px-4 py-2 border-b border-border">
				<Link href={'/playlist'}>
					<H4 className="flex items-center gap-2">
						<Library />
						Playlists
					</H4>
				</Link>

				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon">
						<Plus />
					</Button>
					<Button variant="ghost" size="icon" onClick={onClose}>
						<X />
					</Button>
				</div>
			</div>

			<ScrollArea className="flex-1 w-full p-2">
				{!isAuthenticated ? (
					<div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
						<ListMusic className="w-8 h-8 mb-2" />
						<P>Connect to Spotify</P>
						<Small>Login to view your playlists</Small>
					</div>
				) : isLoading ? (
					<div className="flex items-center justify-center py-8 text-muted-foreground">
						<Small>Loading...</Small>
					</div>
				) : playlists.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
						<ListMusic className="w-8 h-8 mb-2" />
						<P>No playlists yet</P>
						<Small>Create your first playlist</Small>
					</div>
				) : (
					<div className="space-y-1 w-full">
						{playlists.map((playlist) => (
							<PlaylistSmallHorizontalCard
								key={playlist.id}
								playlist={playlist}
								handlePlaylistClick={handlePlaylistClick}
							/>
						))}
					</div>
				)}
			</ScrollArea>
		</div>
	);
}
