'use client';

import { AppSidebar } from '@/components/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { PlayerContext } from '@/context/player-context';
import { SongQueue } from '@/components/song-queue';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import { ListMusic } from 'lucide-react';
import { useState } from 'react';

export function ClientLayout({ children }: { children: React.ReactNode }) {
	const [isQueueOpen, setIsQueueOpen] = useState(false);

	return (
		<SidebarProvider>
			<PlayerContext>
				<AppSidebar />
				<SidebarInset>
					<header className="flex h-16 shrink-0 items-center gap-2">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />

							<Separator
								orientation="vertical"
								className="mr-2 data-[orientation=vertical]:h-4"
							/>
						</div>

						<div className="flex items-center gap-2 ml-auto px-4">
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setIsQueueOpen(!isQueueOpen)}
								className="w-8 h-8"
							>
								<ListMusic className="w-4 h-4" />
							</Button>
						</div>
					</header>

					{children}
				</SidebarInset>
				<SongQueue isOpen={isQueueOpen} onClose={() => setIsQueueOpen(false)} />
			</PlayerContext>
		</SidebarProvider>
	);
}