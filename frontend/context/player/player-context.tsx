'use client';

import { AudioElement } from '@/types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface PlayerContextProvider {
	audioQueue: AudioElement[];
	currentQueuePosition: number;
	repeatMode: 'off' | 'all' | 'one';
	isInShuffleMode: boolean;
	isPlaying: boolean;
	currentTime: number;
	duration: number;
	volume: number;
	isQueueOpen: boolean;
	setAudioQueue: (queue: AudioElement[]) => void;
	setCurrentQueuePosition: (value: number) => void;
	setRepeatMode: (value: 'off' | 'all' | 'one') => void;
	setIsInShuffleMode: (value: boolean) => void;
	setIsPlaying: (value: boolean) => void;
	setCurrentTime: (value: number) => void;
	setDuration: (value: number) => void;
	setVolume: (value: number) => void;
	setIsQueueOpen: (value: boolean) => void;
}

const PlayerContextProvider = createContext<PlayerContextProvider | undefined>(undefined);

const loadAudioQueue = (): AudioElement[] => {
	if (typeof window === 'undefined') return [];
	const saved = localStorage.getItem('audioQueue');
	if (!saved) return [];
	try {
		// Parse and return, refs are not persisted
		const parsed = JSON.parse(saved);
		return Array.isArray(parsed) ? parsed.map((item) => ({ ...item, ref: { current: null } })) : [];
	} catch {
		return [];
	}
};

const loadNumber = (key: string, defaultValue: number): number => {
	if (typeof window === 'undefined') return defaultValue;
	const saved = localStorage.getItem(key);
	return saved ? parseInt(saved, 10) : defaultValue;
};

const loadBoolean = (key: string, defaultValue: boolean): boolean => {
	if (typeof window === 'undefined') return defaultValue;
	const saved = localStorage.getItem(key);
	return saved ? JSON.parse(saved) : defaultValue;
};

const loadRepeatMode = (key: string, defaultValue: 'off' | 'all' | 'one'): 'off' | 'all' | 'one' => {
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
};

export function PlayerContext({ children }: { children: ReactNode }) {
	const [audioQueue, setAudioQueueState] = useState<AudioElement[]>(loadAudioQueue);
	const [currentQueuePosition, setCurrentQueuePositionState] = useState<number>(() =>
		loadNumber('currentQueuePosition', 0)
	);
	const [repeatMode, setRepeatModeState] = useState<'off' | 'all' | 'one'>(() => loadRepeatMode('repeatMode', 'off'));
	const [isInShuffleMode, setIsInShuffleModeState] = useState<boolean>(() => loadBoolean('isInShuffleMode', true));
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const [volume, setVolumeState] = useState<number>(() => loadNumber('volume', 1));
	const [isQueueOpen, setIsQueueOpen] = useState<boolean>(false);

	// Setters that also update localStorage
	const setAudioQueue = (queue: AudioElement[]) => {
		setAudioQueueState(queue);
		if (typeof window !== 'undefined') {
			localStorage.setItem('audioQueue', JSON.stringify(queue.map((item) => ({ data: item.data }))));
		}
	};

	const setCurrentQueuePosition = (value: number) => {
		setCurrentQueuePositionState(value);
		if (typeof window !== 'undefined') {
			localStorage.setItem('currentQueuePosition', value.toString());
		}
	};

	const setRepeatMode = (value: 'off' | 'all' | 'one') => {
		setRepeatModeState(value);
		if (typeof window !== 'undefined') {
			localStorage.setItem('repeatMode', JSON.stringify(value));
		}
	};

	const setIsInShuffleMode = (value: boolean) => {
		setIsInShuffleModeState(value);
		if (typeof window !== 'undefined') {
			localStorage.setItem('isInShuffleMode', JSON.stringify(value));
		}
	};

	const setVolume = (value: number) => {
		setVolumeState(value);
		if (typeof window !== 'undefined') {
			localStorage.setItem('volume', value.toString());
		}
	};

	// Restore state from localStorage on mount (for SSR safety)
	useEffect(() => {
		if (typeof window === 'undefined') return;
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setAudioQueueState(loadAudioQueue());
		setCurrentQueuePositionState(loadNumber('currentQueuePosition', 0));
		setRepeatModeState(loadRepeatMode('repeatMode', 'off'));
		setIsInShuffleModeState(loadBoolean('isInShuffleMode', true));
		setVolumeState(loadNumber('volume', 1));
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
				setAudioQueue,
				setCurrentQueuePosition,
				setRepeatMode,
				setIsInShuffleMode,
				setIsPlaying,
				setCurrentTime,
				setDuration,
				setVolume,
				setIsQueueOpen,
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
