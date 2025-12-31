'use client';

import { AppSidebar } from '@/components/sidebar/app-sidebar';
import { SongQueue } from '@/components/song-queue';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { PlayerContext, usePlayerContext } from '@/context/player/player-context';
import dynamic from 'next/dynamic';

const HorizontalFullPlayer = dynamic(
	() => import('@/components/player/horizontal-full-player').then((mod) => mod.HorizontalFullPlayer),
	{ ssr: false }
);

function SongQueueWrapper() {
	const { isQueueOpen, setIsQueueOpen } = usePlayerContext();
	return <SongQueue isOpen={isQueueOpen} onClose={() => setIsQueueOpen(false)} />;
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<PlayerContext>
				<AppSidebar />
				<SidebarInset>
					<header className="flex h-16 shrink-0 items-center gap-2">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
						</div>
					</header>

					{children}
				</SidebarInset>
				<SongQueueWrapper />
				<HorizontalFullPlayer />
			</PlayerContext>
		</SidebarProvider>
	);
}
