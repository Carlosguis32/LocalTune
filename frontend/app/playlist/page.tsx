import { PlaylistCard } from '@/components/playlist/playlist-card';
import { H1 } from '@/components/ui/typography';
import { PlaylistRecord } from '@/database-types';
import { PlaylistsServices } from './page-services';

export default async function Playlists() {
	const { fetchedPlaylists } = await PlaylistsServices();

	return (
		<div className="flex flex-col items-start p-6 w-full">
			<span className="flex flex-col items-start gap-2">
				<H1 className="px-3">Your playlists</H1>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
					{fetchedPlaylists.map((playlist: PlaylistRecord) => {
						return <PlaylistCard key={playlist.id} playlist={playlist} />;
					})}
				</div>
			</span>
		</div>
	);
}
