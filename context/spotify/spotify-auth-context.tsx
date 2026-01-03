'use client';

import { getSpotifySettings, logoutSpotify, refreshToken } from '@/lib/api/spotify';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface SpotifyAuthContextType {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
	getAccessToken: () => Promise<string | null>;
}

const SpotifyAuthContext = createContext<SpotifyAuthContextType | undefined>(undefined);

export function SpotifyAuthProvider({ children }: { children: ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		async function checkAuth() {
			try {
				// Try to refresh the token to verify we have a valid session
				await refreshToken();
				setIsAuthenticated(true);
			} catch {
				// If refresh fails, we don't have a valid session
				setIsAuthenticated(false);
			}
		}

		checkAuth();
	}, []);

	const login = () => {
		window.location.href = '/auth/spotify/login';
	};

	const logout = async () => {
		try {
			await logoutSpotify();
			setIsAuthenticated(false);
		} catch (error) {
			console.error('Error logging out:', error);
		}
	};

	const getAccessToken = async (): Promise<string | null> => {
		try {
			const { accessToken, expiresAt } = await refreshToken();
			if (Date.now() < expiresAt) {
				return accessToken;
			}
		} catch {
			setIsAuthenticated(false);
		}
		return null;
	};

	return (
		<SpotifyAuthContext.Provider value={{ isAuthenticated, login, logout, getAccessToken }}>
			{children}
		</SpotifyAuthContext.Provider>
	);
}

export function useSpotifyAuth() {
	const context = useContext(SpotifyAuthContext);
	if (!context) {
		throw new Error('useSpotifyAuth must be used within SpotifyAuthProvider');
	}
	return context;
}
