import { API_BASE_URL } from '../constants';

export async function getSpotifySettings(): Promise<{ clientId: string; clientSecret: string }> {
	try {
		const response = await fetch(`${API_BASE_URL}/v1/spotify/settings`);

		if (!response.ok) {
			throw new Error(`Failed to fetch Spotify settings: ${response.statusText}`);
		}

		return response.json();
	} catch (error) {
		console.error('Error fetching Spotify settings:', error);
		throw error;
	}
}

export async function saveSpotifySettings(data: { clientId: string; clientSecret: string }): Promise<void> {
	try {
		const response = await fetch(`${API_BASE_URL}/v1/spotify/settings`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`Failed to save Spotify settings: ${response.statusText}`);
		}
	} catch (error) {
		console.error('Error saving Spotify settings:', error);
		throw error;
	}
}

export async function exchangeToken(code: string, codeVerifier: string): Promise<{ accessToken: string; expiresAt: number }> {
	try {
		const response = await fetch(`${API_BASE_URL}/v1/spotify/auth/exchange`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ code, codeVerifier }),
		});

		if (!response.ok) {
			throw new Error(`Failed to exchange token: ${response.statusText}`);
		}

		return response.json();
	} catch (error) {
		console.error('Error exchanging token:', error);
		throw error;
	}
}

export async function refreshToken(): Promise<{ accessToken: string; expiresAt: number }> {
	try {
		const response = await fetch(`${API_BASE_URL}/v1/spotify/auth/refresh`, {
			method: 'POST',
		});

		if (!response.ok) {
			throw new Error(`Failed to refresh token: ${response.statusText}`);
		}

		return response.json();
	} catch (error) {
		console.error('Error refreshing token:', error);
		throw error;
	}
}

export async function logoutSpotify(): Promise<void> {
	try {
		const response = await fetch(`${API_BASE_URL}/v1/spotify/auth/logout`, {
			method: 'POST',
		});

		if (!response.ok) {
			throw new Error(`Failed to logout: ${response.statusText}`);
		}
	} catch (error) {
		console.error('Error logging out:', error);
		throw error;
	}
}