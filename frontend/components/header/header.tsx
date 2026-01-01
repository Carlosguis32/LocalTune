import { Button } from '@/components/ui/button';
import { usePlayerContext } from '@/context/player/player-context';
import { Library, Settings, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchBar } from '../search/search-bar';

export function Header() {
	const { isPlaylistSidebarOpen, setIsPlaylistSidebarOpen } = usePlayerContext();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-16">
			<div className="relative flex items-center justify-between px-6 py-3 h-full">
				<div className="flex items-center gap-16">
					<Link href="/" className="flex items-center gap-2">
						<Image src="/melira-logo.svg" alt="Melira Logo" width={24} height={24} className="w-6 h-6" />
						<span className="text-lg font-semibold">Melira</span>
					</Link>
				</div>

				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md flex gap-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsPlaylistSidebarOpen(!isPlaylistSidebarOpen)}
						className={`${isPlaylistSidebarOpen && 'bg-accent'}`}
					>
						<Library className="w-4 h-4" />
					</Button>

					<SearchBar />
				</div>

				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon">
						<User />
					</Button>
					<Button variant="ghost" size="icon">
						<Link href={'/settings'}>
							<Settings />
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
