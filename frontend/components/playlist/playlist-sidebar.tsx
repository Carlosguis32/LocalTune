import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlaylistRecord } from '@/database-types';
import { getAllPlaylists } from '@/lib/api/playlist';
import { Library, ListMusic, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { H4, P, Small } from '../ui/typography';
import { PlaylistSmallHorizontalCard } from './playlist-small-horizontal-card';

interface PlaylistSidebarProps {
	isOpen: boolean;
	onClose: () => void;
	onPlaylistSelect?: (playlist: PlaylistRecord) => void;
}

export function PlaylistSidebar({ isOpen, onClose, onPlaylistSelect }: PlaylistSidebarProps) {
	const [playlists, setPlaylists] = useState<PlaylistRecord[]>([]);

	async function loadPlaylists() {
		try {
			const fetchedPlaylists = await getAllPlaylists();
			setPlaylists(fetchedPlaylists);
		} catch (error) {
			console.error('Failed to load playlists:', error);
		}
	}

	function handlePlaylistClick(playlist: PlaylistRecord) {
		onPlaylistSelect?.(playlist);
	}

	useEffect(() => {
		if (isOpen) {
			const fetchPlaylists = async () => {
				await loadPlaylists();
			};

			fetchPlaylists();
		}
	}, [isOpen]);

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
				{playlists.length === 0 ? (
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
