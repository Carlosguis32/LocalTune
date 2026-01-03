/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { AudioQueue } from '@/components/audio/audio-queue';
import { Header } from '@/components/header/header';
import { PlaylistSidebar } from '@/components/playlist/playlist-sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlayerContext, usePlayerContext } from '@/context/player/player-context';
import { SpotifyAuthProvider } from '@/context/spotify/spotify-auth-context';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const HorizontalFullPlayer = dynamic(
	() => import('@/components/player/horizontal-full-player').then((mod) => mod.HorizontalFullPlayer),
	{ ssr: false }
);

function RightSidebarWrapper() {
	const { isQueueOpen, setIsQueueOpen } = usePlayerContext();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return <AudioQueue isOpen={isQueueOpen} onClose={() => setIsQueueOpen(false)} />;
}

function LeftSidebarWrapper() {
	const { isPlaylistSidebarOpen, setIsPlaylistSidebarOpen } = usePlayerContext();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return <PlaylistSidebar isOpen={isPlaylistSidebarOpen} onClose={() => setIsPlaylistSidebarOpen(false)} />;
}

function HeaderWrapper() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// Render a placeholder with the same height to avoid layout shift
		return <div className="fixed top-0 left-0 right-0 z-50 h-16" />;
	}

	return <Header />;
}

function MainContent({ children }: { children: React.ReactNode }) {
	return (
		<main className="pt-16 pb-24 flex-1 overflow-hidden">
			<ScrollArea className="h-full">{children}</ScrollArea>
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
						<div className="flex-1 flex flex-col overflow-hidden">
							<MainContent>{children}</MainContent>
						</div>
						<RightSidebarWrapper />
					</div>
					<HeaderWrapper />
					<HorizontalFullPlayer />
				</PlayerContext>
			</SpotifyAuthProvider>
		</div>
	);
}
