import { AppSidebar } from '@/components/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { PlayerContext } from '@/context/player-context';
import { Separator } from '@radix-ui/react-separator';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'LocalTune',
	description: 'A self-hosted server for your music, focused on organizing your music',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
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
							</header>

							{children}
						</SidebarInset>
					</PlayerContext>
				</SidebarProvider>
			</body>
		</html>
	);
}
