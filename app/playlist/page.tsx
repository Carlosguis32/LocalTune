'use client';

import { PlaylistCard } from '@/components/playlist/playlist-card';
import { H1, P } from '@/components/ui/typography';
import { SpotifyPlaylist } from '@/database-types';
import { getSpotifyPlaylists } from '@/lib/api/spotify';
import { getAllLocalAudioFiles } from '@/lib/api/audioPath';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, AlertCircle } from 'lucide-react';
import { useSpotifyAuth } from '@/context/spotify/spotify-auth-context';

export default function Playlists() {
	const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>([]);
	const [localFilesCount, setLocalFilesCount] = useState<number>(0);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const { isAuthenticated, login } = useSpotifyAuth();

	// Crear la playlist virtual de archivos locales
	const localPlaylist: SpotifyPlaylist = {
		id: 'local-files',
		name: 'Archivos Locales',
		description: 'Todos tus archivos de música local',
		images: [],
		owner: {
			id: 'local',
			display_name: 'Local'
		},
		tracks: {
			total: localFilesCount
		},
		public: false,
		collaborative: false,
		snapshot_id: '',
		external_urls: {
			spotify: ''
		}
	};

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				setError(null);

				// Siempre cargar archivos locales
				const localFiles = await getAllLocalAudioFiles();
				setLocalFilesCount(localFiles.length);

				// Cargar playlists de Spotify solo si está autenticado
				if (isAuthenticated) {
					const fetchedPlaylists = await getSpotifyPlaylists();
					setPlaylists(fetchedPlaylists);
				} else {
					setPlaylists([]);
				}
			} catch (error) {
				console.error('Error loading playlists:', error);
				setError(error instanceof Error ? error.message : 'Failed to load playlists');
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, [isAuthenticated]);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center p-6 w-full h-full">
				<P className="text-muted-foreground">Loading playlists...</P>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex flex-col items-center justify-center p-6 w-full h-full gap-4">
				<AlertCircle className="size-16 text-destructive" />
				<H1>Error</H1>
				<P className="text-muted-foreground text-center max-w-md">{error}</P>
				<Button onClick={() => window.location.reload()}>Try Again</Button>
			</div>
		);
	}

	// Mostrar mensaje para conectar Spotify solo si no está autenticado
	const showSpotifyPrompt = !isAuthenticated;
	
	// Combinar playlists: local primero, luego Spotify
	const allPlaylists = [localPlaylist, ...playlists];

	return (
		<div className="flex flex-col items-start p-6 w-full">
			<div className="flex items-center justify-between w-full mb-6">
				<H1 className="px-3">Your playlists</H1>
				<Button size="sm" className="gap-2">
					<Plus className="size-4" />
					Create Playlist
				</Button>
			</div>

			{showSpotifyPrompt && (
				<div className="w-full mb-6 p-4 bg-accent/50 rounded-lg border border-border">
					<div className="flex items-center justify-between">
						<div>
							<P className="font-medium">Connect to Spotify</P>
							<P className="text-sm text-muted-foreground">
								Connect your Spotify account to access your online playlists
							</P>
						</div>
						<Button onClick={login} size="sm">
							Login to Spotify
						</Button>
					</div>
				</div>
			)}

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
				{allPlaylists.map((playlist: SpotifyPlaylist) => {
					return <PlaylistCard key={playlist.id} playlist={playlist} />;
				})}
			</div>
		</div>
	);
}
