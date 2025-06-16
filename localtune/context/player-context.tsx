'use client';

import { AudioMetadata } from '@/types';
import { createContext, ReactNode, RefObject, useContext, useRef, useState } from 'react';

interface PlayerContextProvider {
	audioRef: RefObject<HTMLAudioElement | null>;
	audioQueue: string[];
	audioFilesFolders: string[];
	audioFoldersFilenames: string[];
	isPlaying: boolean;
	isInRepeatMode: boolean;
	isInShuffleMode: boolean;
	currentlyPlayingAudio: string;
	currentlyPlayingAudioMetadata: AudioMetadata | undefined;
	currentQueuePosition: number;
	currentTime: number;
	duration: number;
	setAudioQueue: (queue: string[]) => void;
	setAudioFilesFolders: (folders: string[]) => void;
	setAudioFoldersFilenames: (files: string[]) => void;
	setIsPlaying: (value: boolean) => void;
	setIsInRepeatMode: (value: boolean) => void;
	setIsInShuffleMode: (value: boolean) => void;
	setCurrentlyPlayingAudio: (audio: string) => void;
	setCurrentlyPlayingAudioMetadata: (metadata: AudioMetadata) => void;
	setCurrentQueuePosition: (position: number) => void;
	setCurrentTime: (time: number) => void;
	setDuration: (time: number) => void;
}

interface PlayerContextProps {
	children: ReactNode;
}

const PlayerContextProvider = createContext<PlayerContextProvider | undefined>(undefined);

export function PlayerContext({ children }: PlayerContextProps) {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [audioFilesFolders, setAudioFilesFolders] = useState(['F:/Server - 3/03 - Música']);
	const [audioFoldersFilenames, setAudioFoldersFilenames] = useState<string[]>([]);
	const [isInRepeatMode, setIsInRepeatMode] = useState(false);
	const [isInShuffleMode, setIsInShuffleMode] = useState(true);
	const [isPlaying, setIsPlaying] = useState(false);
	const [audioQueue, setAudioQueue] = useState<string[]>([]);
	const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState<string>('');
	const [currentlyPlayingAudioMetadata, setCurrentlyPlayingAudioMetadata] = useState<AudioMetadata | undefined>(
		undefined
	);
	const [currentQueuePosition, setCurrentQueuePosition] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	return (
		<PlayerContextProvider.Provider
			value={{
				audioRef,
				audioQueue,
				audioFilesFolders,
				audioFoldersFilenames,
				isPlaying,
				isInRepeatMode,
				isInShuffleMode,
				currentlyPlayingAudio,
				currentlyPlayingAudioMetadata,
				currentQueuePosition,
				currentTime,
				duration,
				setAudioQueue,
				setAudioFilesFolders,
				setAudioFoldersFilenames,
				setIsPlaying,
				setIsInRepeatMode,
				setIsInShuffleMode,
				setCurrentlyPlayingAudio,
				setCurrentlyPlayingAudioMetadata,
				setCurrentQueuePosition,
				setCurrentTime,
				setDuration,
			}}
		>
			{children}
		</PlayerContextProvider.Provider>
	);
}

export function usePlayerContext(): PlayerContextProvider {
	const context = useContext(PlayerContextProvider);

	if (!context) throw new Error(`A context is not being used within its corresponding provider: ${context}`);

	return context;
}
