'use client';

import { AudioElement, RepeatMode } from '@/types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface PlayerContextProvider {
	audioQueue: AudioElement[];
	currentQueuePosition: number;
	repeatMode: RepeatMode;
	isInShuffleMode: boolean;
	isPlaying: boolean;
	currentTime: number;
	duration: number;
	volume: number;
	isQueueOpen: boolean;
	isPlaylistSidebarOpen: boolean;
	setAudioQueue: (queue: AudioElement[]) => void;
	setCurrentQueuePosition: (value: number) => void;
	setRepeatMode: (value: RepeatMode) => void;
	setIsInShuffleMode: (value: boolean) => void;
	setIsPlaying: (value: boolean) => void;
	setCurrentTime: (value: number) => void;
	setDuration: (value: number) => void;
	setVolume: (value: number) => void;
	setIsQueueOpen: (value: boolean) => void;
	setIsPlaylistSidebarOpen: (value: boolean) => void;
}

const PlayerContextProvider = createContext<PlayerContextProvider | undefined>(undefined);

function loadAudioQueue(): AudioElement[] {
	if (typeof window === 'undefined') return [];
	const saved = localStorage.getItem('audioQueue');
	if (!saved) return [];

	try {
		const parsed = JSON.parse(saved);
		return Array.isArray(parsed) ? parsed.map((item) => ({ ...item, ref: { current: null } })) : [];
	} catch {
		return [];
	}
}

function loadNumber(key: string, defaultValue: number): number {
	if (typeof window === 'undefined') return defaultValue;
	const saved = localStorage.getItem(key);
	return saved ? parseInt(saved, 10) : defaultValue;
}

function loadBoolean(key: string, defaultValue: boolean): boolean {
	if (typeof window === 'undefined') return defaultValue;
	const saved = localStorage.getItem(key);
	return saved ? JSON.parse(saved) : defaultValue;
}

function loadRepeatMode(key: string, defaultValue: RepeatMode): RepeatMode {
	if (typeof window === 'undefined') return defaultValue;
	const saved = localStorage.getItem(key);
	if (!saved) return defaultValue;

	try {
		if (saved === '"off"' || saved === '"all"' || saved === '"one"') {
			return JSON.parse(saved);
		}

		return defaultValue;
	} catch {
		return defaultValue;
	}
}

export function PlayerContext({ children }: { children: ReactNode }) {
	const [audioQueue, setAudioQueueState] = useState<AudioElement[]>(loadAudioQueue);
	const [currentQueuePosition, setCurrentQueuePositionState] = useState<number>(() =>
		loadNumber('currentQueuePosition', 0)
	);
	const [repeatMode, setRepeatModeState] = useState<RepeatMode>(() => loadRepeatMode('repeatMode', 'off'));
	const [isInShuffleMode, setIsInShuffleModeState] = useState<boolean>(() => loadBoolean('isInShuffleMode', true));
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const [volume, setVolumeState] = useState<number>(() => loadNumber('volume', 1));
	const [isQueueOpen, setIsQueueOpenState] = useState<boolean>(() => loadBoolean('isQueueOpen', false));
	const [isPlaylistSidebarOpen, setIsPlaylistSidebarOpenState] = useState<boolean>(() => loadBoolean('isPlaylistSidebarOpen', false));

	// Setters that also update localStorage
	function setAudioQueue(queue: AudioElement[]) {
		setAudioQueueState(queue);
		if (typeof window !== 'undefined') {
			localStorage.setItem('audioQueue', JSON.stringify(queue.map((item) => ({ data: item.data }))));
		}
	}

	function setCurrentQueuePosition(value: number) {
		setCurrentQueuePositionState(value);
		if (typeof window !== 'undefined') {
			localStorage.setItem('currentQueuePosition', value.toString());
		}
	}

	function setRepeatMode(value: RepeatMode) {
		setRepeatModeState(value);
		if (typeof window !== 'undefined') {
			localStorage.setItem('repeatMode', JSON.stringify(value));
		}
	}

	function setIsInShuffleMode(value: boolean) {
		setIsInShuffleModeState(value);
		if (typeof window !== 'undefined') {
			localStorage.setItem('isInShuffleMode', JSON.stringify(value));
		}
	}

	function setVolume(value: number) {
		setVolumeState(value);
		if (typeof window !== 'undefined') {
			localStorage.setItem('volume', value.toString());
		}
	}

	function setIsQueueOpen(value: boolean) {
		setIsQueueOpenState(value);
		if (typeof window !== 'undefined') {
			localStorage.setItem('isQueueOpen', JSON.stringify(value));
		}
	}

	function setIsPlaylistSidebarOpen(value: boolean) {
		setIsPlaylistSidebarOpenState(value);
		if (typeof window !== 'undefined') {
			localStorage.setItem('isPlaylistSidebarOpen', JSON.stringify(value));
		}
	}

	// Restore state from localStorage on mount
	useEffect(() => {
		if (typeof window === 'undefined') return;
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setAudioQueueState(loadAudioQueue());
		setCurrentQueuePositionState(loadNumber('currentQueuePosition', 0));
		setRepeatModeState(loadRepeatMode('repeatMode', 'off'));
		setIsInShuffleModeState(loadBoolean('isInShuffleMode', true));
		setVolumeState(loadNumber('volume', 1));
		setIsQueueOpenState(loadBoolean('isQueueOpen', false));
		setIsPlaylistSidebarOpenState(loadBoolean('isPlaylistSidebarOpen', false));
	}, []);

	return (
		<PlayerContextProvider.Provider
			value={{
				audioQueue,
				currentQueuePosition,
				repeatMode,
				isInShuffleMode,
				isPlaying,
				currentTime,
				duration,
				volume,
				isQueueOpen,
				isPlaylistSidebarOpen,
				setAudioQueue,
				setCurrentQueuePosition,
				setRepeatMode,
				setIsInShuffleMode,
				setIsPlaying,
				setCurrentTime,
				setDuration,
				setVolume,
				setIsQueueOpen: setIsQueueOpen,
				setIsPlaylistSidebarOpen: setIsPlaylistSidebarOpen,
			}}
		>
			{children}
		</PlayerContextProvider.Provider>
	);
}

export function usePlayerContext(): PlayerContextProvider {
	const context = useContext(PlayerContextProvider);

	if (!context) throw new Error('usePlayerContext must be used within a PlayerContext provider');

	return context;
}
