'use client';

import { AudioFullWidthCard } from '@/components/audio/audio-full-width-card';
import { Image } from '@/components/image/image';
import { Button } from '@/components/ui/button';
import { H1, P } from '@/components/ui/typography';
import { usePlayerContext } from '@/context/player/player-context';
import { PlaylistRecord } from '@/database-types';
import { formatDuration } from '@/lib/functions';
import { Clock, Play } from 'lucide-react';
import { createRef } from 'react';

interface PlaylistPageClientProps {
	playlist: PlaylistRecord;
}

export function PlaylistPageClient({ playlist }: PlaylistPageClientProps) {
	const { setAudioQueue, setCurrentQueuePosition, setIsPlaying } = usePlayerContext();

	function handlePlayAll() {
		if (!playlist.audioFiles || playlist.audioFiles.length === 0) return;

		const queue = playlist.audioFiles.map((audio) => ({
			data: audio,
			ref: createRef<HTMLAudioElement>(),
		}));

		setAudioQueue(queue);
		setCurrentQueuePosition(0);
		setIsPlaying(true);
	}

	function handlePlayFromIndex(index: number) {
		if (!playlist.audioFiles || playlist.audioFiles.length === 0) return;

		const queue = playlist.audioFiles.map((audio) => ({
			data: audio,
			ref: createRef<HTMLAudioElement>(),
		}));

		setAudioQueue(queue);
		setCurrentQueuePosition(index);
		setIsPlaying(true);
	}

	const totalDuration = playlist.audioFiles?.reduce((acc, audio) => acc + (audio.duration || 0), 0) || 0;

	return (
		<div className="flex flex-col h-full overflow-hidden">
			{/* Header Section */}
			<div className="flex flex-col md:flex-row gap-6 p-6 pb-4">
				<Image
					className="aspect-square object-cover rounded-md w-48 h-48 shrink-0 shadow-lg"
					src={''}
					alt={playlist.name || 'Playlist image'}
					width={200}
					height={200}
				/>
				<div className="flex flex-col justify-end gap-2 min-w-0">
					<P className="text-sm font-semibold">Playlist</P>
					<H1 className="text-4xl md:text-6xl font-bold truncate">{playlist.name || 'Unnamed Playlist'}</H1>
					<div className="flex items-center gap-1 text-sm">
						<span className="text-foreground font-semibold">{playlist.audioFiles?.length || 0} songs</span>
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
					disabled={!playlist.audioFiles || playlist.audioFiles.length === 0}
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
					{playlist.audioFiles?.map((audio, index) => (
						<AudioFullWidthCard
							key={audio.id}
							audio={audio}
							audioIndex={index}
							onClick={() => handlePlayFromIndex(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
