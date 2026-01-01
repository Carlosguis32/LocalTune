'use client';

import { Header } from '@/components/header/header';
import { PlaylistSidebar } from '@/components/playlist/playlist-sidebar';
import { SongQueue } from '@/components/queue/song-queue';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlayerContext, usePlayerContext } from '@/context/player/player-context';
import { SpotifyAuthProvider } from '@/context/spotify/spotify-auth-context';
import dynamic from 'next/dynamic';

const HorizontalFullPlayer = dynamic(
	() => import('@/components/player/horizontal-full-player').then((mod) => mod.HorizontalFullPlayer),
	{ ssr: false }
);

function RightSidebarWrapper() {
	const { isQueueOpen, setIsQueueOpen } = usePlayerContext();
	return <SongQueue isOpen={isQueueOpen} onClose={() => setIsQueueOpen(false)} />;
}

function LeftSidebarWrapper() {
	const { isPlaylistSidebarOpen, setIsPlaylistSidebarOpen } = usePlayerContext();
	return <PlaylistSidebar isOpen={isPlaylistSidebarOpen} onClose={() => setIsPlaylistSidebarOpen(false)} />;
}

function MainContent({ children }: { children: React.ReactNode }) {
	return (
		<main className="pt-16 pb-24 flex-1">
			<ScrollArea className="h-[calc(100vh-10rem)] mx-1">{children}</ScrollArea>
		</main>
	);
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full min-h-screen bg-transparent">
			<SpotifyAuthProvider>
				<PlayerContext>
					<div className="flex h-screen">
						<LeftSidebarWrapper />
						<div className="flex-1 flex flex-col">
							<div className="max-w-7xl mx-auto w-full">
								<MainContent>{children}</MainContent>
							</div>
						</div>
						<RightSidebarWrapper />
					</div>
					<Header />
					<HorizontalFullPlayer />
				</PlayerContext>
			</SpotifyAuthProvider>
		</div>
	);
}
