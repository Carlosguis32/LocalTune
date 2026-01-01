import { PlaylistPageClient } from './page-client';
import { PlaylistServices } from './page-services';

export default async function Playlist({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const { playlistSongs } = await PlaylistServices(slug);

	return <PlaylistPageClient playlist={playlistSongs} />;
}
