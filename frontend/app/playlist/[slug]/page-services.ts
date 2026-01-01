import { getPlaylistById } from '@/lib/api/playlist';

export async function PlaylistServices(playlistId: string) {
	const playlistSongs = await getPlaylistById(playlistId);

	return { playlistSongs };
}
