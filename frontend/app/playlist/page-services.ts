import { getAllPlaylists } from '@/lib/api/playlist';

export async function PlaylistsServices() {
	const fetchedPlaylists = await getAllPlaylists();

	return { fetchedPlaylists };
}
