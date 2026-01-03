'use client';

import { PlaylistPageClient } from './page-client';
import { getSpotifyPlaylistTracks } from '@/lib/api/spotify';
import { getAllLocalAudioFiles } from '@/lib/api/audioPath';
import { useEffect, useState } from 'react';
import { SpotifyPlaylistTrack, AudioFile } from '@/database-types';
import { H1, P } from '@/components/ui/typography';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSpotifyAuth } from '@/context/spotify/spotify-auth-context';

export default function Playlist({ params }: { params: Promise<{ slug: string }> }) {
	const [tracks, setTracks] = useState<SpotifyPlaylistTrack[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [slug, setSlug] = useState<string>('');
	const { isAuthenticated, login } = useSpotifyAuth();

	useEffect(() => {
		async function unwrapParams() {
			const resolvedParams = await params;
			setSlug(resolvedParams.slug);
		}
		unwrapParams();
	}, [params]);

	useEffect(() => {
		async function fetchPlaylistTracks() {
			if (!slug) {
				setIsLoading(false);
				return;
			}

			try {
				setIsLoading(true);
				setError(null);

				// Si es la playlist de archivos locales
				if (slug === 'local-files') {
					const localFiles = await getAllLocalAudioFiles();
					
					// Convertir AudioFile[] a SpotifyPlaylistTrack[]
					const localTracks: SpotifyPlaylistTrack[] = localFiles.map((file: AudioFile) => ({
						track: {
							id: file.path,
							name: file.title || file.path.split('\\').pop() || 'Unknown',
							artists: file.artist ? [{ id: '', name: file.artist }] : [{ id: '', name: 'Unknown Artist' }],
							album: {
								id: '',
								name: file.album || 'Unknown Album',
								images: []
							},
							duration_ms: file.duration || 0,
							uri: `local:${file.path}`,
							external_urls: {
								spotify: ''
							}
						},
						added_at: ''
					}));
					
					setTracks(localTracks);
				} else {
					// Es una playlist de Spotify
					if (!isAuthenticated) {
						setIsLoading(false);
						return;
					}
					
					const playlistTracks = await getSpotifyPlaylistTracks(slug);
					setTracks(playlistTracks);
				}
			} catch (error: any) {
				console.error('Error loading playlist tracks:', error);
				// Check if it's an auth error
				if (error?.toString().includes('No hay sesión activa') || error?.toString().includes('session')) {
					setError('Your Spotify session has expired. Please login again.');
				} else {
					setError(error instanceof Error ? error.message : 'Failed to load playlist tracks');
				}
			} finally {
				setIsLoading(false);
			}
		}

		fetchPlaylistTracks();
	}, [slug, isAuthenticated]);

	// Solo mostrar prompt de autenticación si NO es la playlist local y NO está autenticado
	if (slug !== 'local-files' && !isAuthenticated) {
		return (
			<div className="flex flex-col items-center justify-center p-6 w-full h-full gap-4">
				<AlertCircle className="size-16 text-muted-foreground" />
				<H1>Connect to Spotify</H1>
				<P className="text-muted-foreground text-center max-w-md">
					You need to connect your Spotify account to view this playlist.
				</P>
				<Button onClick={login} size="lg">
					Login to Spotify
				</Button>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="flex items-center justify-center p-6 w-full h-full">
				<P className="text-muted-foreground">Loading playlist...</P>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex flex-col items-center justify-center p-6 w-full h-full gap-4">
				<AlertCircle className="size-16 text-destructive" />
				<P className="text-muted-foreground text-center max-w-md">{error}</P>
				<div className="flex gap-2">
					{error.includes('session') || error.includes('expired') ? (
						<Button onClick={login}>Login Again</Button>
					) : (
						<Button onClick={() => window.location.reload()}>Try Again</Button>
					)}
				</div>
			</div>
		);
	}

	return <PlaylistPageClient playlistId={slug} tracks={tracks} />;
}
