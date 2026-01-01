import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlaylistRecord } from '@/database-types';
import { getAllPlaylists } from '@/lib/api/playlist';
import { cn } from '@/lib/utils';
import { Library, ListMusic, Plus, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PlaylistSidebarProps {
	isOpen: boolean;
	onClose: () => void;
	onPlaylistSelect?: (playlist: PlaylistRecord) => void;
}

export function PlaylistSidebar({ isOpen, onClose, onPlaylistSelect }: PlaylistSidebarProps) {
	const [playlists, setPlaylists] = useState<PlaylistRecord[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (isOpen) {
			loadPlaylists();
		}
	}, [isOpen]);

	const loadPlaylists = async () => {
		try {
			setLoading(true);
			const fetchedPlaylists = await getAllPlaylists();
			setPlaylists(fetchedPlaylists);
		} catch (error) {
			console.error('Failed to load playlists:', error);
		} finally {
			setLoading(false);
		}
	};

	const handlePlaylistClick = (playlist: PlaylistRecord) => {
		onPlaylistSelect?.(playlist);
	};

	return (
		<div
			className={`pt-16 h-[calc(100vh-4rem)] bg-background border-r border-border flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
				isOpen ? 'w-80' : 'w-0'
			}`}
		>
			<div className="flex items-center justify-between p-4 border-b border-border">
				<h2 className="flex items-center gap-2 text-lg font-semibold">
					<Library />
					Playlists
				</h2>
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon">
						<Plus className="w-4 h-4" />
					</Button>
					<Button variant="ghost" size="icon" onClick={onClose}>
						<X className="w-4 h-4" />
					</Button>
				</div>
			</div>

			<ScrollArea className="flex-1">
				<div className="p-2">
					{loading ? (
						<div className="flex items-center justify-center py-8">
							<div className="text-sm text-muted-foreground">Loading playlists...</div>
						</div>
					) : playlists.length === 0 ? (
						<div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
							<ListMusic className="w-8 h-8 mb-2" />
							<p className="text-sm">No playlists yet</p>
							<p className="text-xs">Create your first playlist</p>
						</div>
					) : (
						<div className="space-y-1">
							{playlists.map((playlist) => (
								<div
									key={playlist.id}
									className={cn(
										'group flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-accent transition-colors'
									)}
									onClick={() => handlePlaylistClick(playlist)}
								>
									<div className="flex-1 min-w-0">
										<p className="text-sm font-medium truncate">
											{playlist.name || 'Unnamed Playlist'}
										</p>
										<p className="text-xs text-muted-foreground">
											{playlist.audioFiles?.length || 0} songs
										</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</ScrollArea>
		</div>
	);
}
