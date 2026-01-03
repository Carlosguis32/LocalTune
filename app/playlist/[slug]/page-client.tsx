'use client';

import { AudioFullWidthCard } from '@/components/audio/audio-full-width-card';
import { Image } from '@/components/image/image';
import { Button } from '@/components/ui/button';
import { H1, P } from '@/components/ui/typography';
import { usePlayerContext } from '@/context/player/player-context';
import { SpotifyPlaylistTrack } from '@/database-types';
import { formatDuration } from '@/lib/functions';
import { Clock, Play } from 'lucide-react';
import { createRef } from 'react';

interface PlaylistPageClientProps {
	playlistId: string;
	tracks: SpotifyPlaylistTrack[];
}

export function PlaylistPageClient({ playlistId, tracks }: PlaylistPageClientProps) {
	const { setAudioQueue, setCurrentQueuePosition, setIsPlaying } = usePlayerContext();

	// Obtener información de la primera canción para la imagen del álbum
	const firstTrack = tracks[0]?.track;
	const playlistImage = firstTrack?.album?.images?.[0]?.url || '';

	// Calcular duración total
	const totalDuration = tracks.reduce((acc, item) => acc + (item.track?.duration_ms || 0), 0) / 1000;

	// Convertir tracks de Spotify a formato AudioFile para el reproductor
	// NOTA: Solo se pueden reproducir archivos locales. Las canciones de Spotify requieren Spotify Web Playback SDK
	const convertToAudioFiles = () => {
		return tracks
			.filter((item) => {
				// Solo incluir tracks con URI local (tienen archivo en el sistema)
				return item.track && item.track.uri.startsWith('local:');
			})
			.map((item) => ({
				id: item.track.id,
				path: item.track.uri.replace('local:', ''),
				spotifyId: undefined,
				title: item.track.name,
				artist: item.track.artists?.[0]?.name || 'Unknown Artist',
				album: item.track.album?.name || 'Unknown Album',
				duration: Math.floor(item.track.duration_ms / 1000),
				created: new Date().toISOString() as any,
				updated: new Date().toISOString() as any,
			}));
	};

	function handlePlayAll() {
		if (!tracks || tracks.length === 0) return;

		const audioFiles = convertToAudioFiles();
		
		if (audioFiles.length === 0) {
			alert('Esta playlist no contiene archivos locales que se puedan reproducir. Las canciones de Spotify requieren integración con Spotify Web Playback SDK.');
			return;
		}

		const queue = audioFiles.map((audio) => ({
			data: audio,
			ref: createRef<HTMLAudioElement>(),
		}));

		setAudioQueue(queue);
		setCurrentQueuePosition(0);
		setIsPlaying(true);
	}

	function handlePlayFromIndex(index: number) {
		if (!tracks || tracks.length === 0) return;

		const audioFiles = convertToAudioFiles();
		
		if (audioFiles.length === 0) {
			alert('Esta playlist no contiene archivos locales que se puedan reproducir. Las canciones de Spotify requieren integración con Spotify Web Playback SDK.');
			return;
		}

		const queue = audioFiles.map((audio) => ({
			data: audio,
			ref: createRef<HTMLAudioElement>(),
		}));

		setAudioQueue(queue);
		setCurrentQueuePosition(index);
		setIsPlaying(true);
	}

	// Determinar el nombre de la playlist
	const isLocalPlaylist = playlistId === 'local-files';
	const playlistName = isLocalPlaylist ? 'Archivos Locales' : 'Spotify Playlist';

	return (
		<div className="flex flex-col h-full overflow-hidden">
			{/* Header Section */}
			<div className="flex flex-col md:flex-row gap-6 p-6 pb-4">
				<Image
					className="aspect-square object-cover rounded-md w-48 h-48 shrink-0 shadow-lg"
					src={playlistImage}
					alt={playlistName}
					width={200}
					height={200}
				/>
				<div className="flex flex-col justify-end gap-2 min-w-0">
					<P className="text-sm font-semibold">Playlist</P>
					<H1 className="text-4xl md:text-6xl font-bold truncate">{playlistName}</H1>
					<div className="flex items-center gap-1 text-sm">
						<span className="text-foreground font-semibold">
							{tracks.length} {tracks.length === 1 ? 'song' : 'songs'}
						</span>
						{totalDuration > 0 && (
							<>
								<span className="text-muted-foreground">•</span>
								<span className="text-muted-foreground">{formatDuration(totalDuration)}</span>
							</>
						)}
					</div>
				</div>
			</div>

			{/* Controls Section */}
			<div className="px-6 py-6">
				<Button
					onClick={handlePlayAll}
					size="lg"
					className="rounded-full w-14 h-14 p-0"
					disabled={!tracks || tracks.length === 0}
				>
					<Play className="size-6 fill-current" />
				</Button>
			</div>

			{/* Songs List */}
			<div className="flex-1 overflow-y-auto px-6 pb-6">
				{/* Table Header */}
				<div className="grid grid-cols-[50px_4fr_3fr_minmax(120px,1fr)] gap-3 px-2 pb-2 mb-2 border-b border-border">
					<span className="text-muted-foreground text-sm">#</span>
					<span className="text-muted-foreground text-sm">Title</span>
					<span className="text-muted-foreground text-sm hidden sm:block">Artist</span>
					<div className="justify-end hidden md:block">
						<Clock className="size-4 text-muted-foreground" />
					</div>
				</div>

				{/* Songs */}
				<div className="flex flex-col">
					{tracks.map((item, index) => {
						if (!item.track) return null;

						const track = item.track;
						const isLocalTrack = track.uri.startsWith('local:');
						
						const audioFile = {
							id: track.id,
							path: isLocalTrack ? track.uri.replace('local:', '') : '',
							spotifyId: !isLocalTrack ? track.id : undefined,
							title: track.name,
							artist: track.artists?.[0]?.name || 'Unknown Artist',
							album: track.album?.name || 'Unknown Album',
							duration: Math.floor(track.duration_ms / 1000),
							created: new Date().toISOString() as any,
							updated: new Date().toISOString() as any,
						};

						return (
							<AudioFullWidthCard
								key={`${track.id}-${index}`}
								audio={audioFile}
								audioIndex={index}
								onClick={() => {
									// Solo permitir reproducir archivos locales
									if (isLocalTrack) {
										handlePlayFromIndex(index);
									} else {
										console.warn('Spotify tracks cannot be played locally. Spotify Web Playback SDK integration required.');
									}
								}}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
