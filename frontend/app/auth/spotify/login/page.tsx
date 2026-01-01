'use client';

import { getSpotifySettings } from '@/lib/api/spotify';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SpotifyLogin() {
	const router = useRouter();

	useEffect(() => {
		async function initLogin() {
			try {
				const settings = await getSpotifySettings();
				const codeVerifier = generateCodeVerifier();
				const codeChallenge = await generateCodeChallenge(codeVerifier);

				// Store codeVerifier in sessionStorage
				sessionStorage.setItem('spotify_code_verifier', codeVerifier);

				const params = new URLSearchParams({
					client_id: settings.clientId,
					response_type: 'code',
					redirect_uri: 'http://127.0.0.1:3000/auth/spotify/callback',
					scope: 'user-read-private user-read-email',
					code_challenge: codeChallenge,
					code_challenge_method: 'S256',
				});

				const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
				window.location.href = authUrl;
			} catch (error) {
				console.error('Error initiating login:', error);
				alert('Error loading settings. Please configure Spotify settings first.');
				router.push('/settings');
			}
		}

		initLogin();
	}, [router]);

	return <div>Redirecting to Spotify...</div>;
}

function generateCodeVerifier() {
	const array = new Uint8Array(32);
	crypto.getRandomValues(array);
	return btoa(String.fromCharCode(...array)).replace(/[^a-zA-Z0-9]/g, '');
}

async function generateCodeChallenge(verifier: string) {
	const encoder = new TextEncoder();
	const data = encoder.encode(verifier);
	const hash = await crypto.subtle.digest('SHA-256', data);
	return btoa(String.fromCharCode(...new Uint8Array(hash))).replace(/[^a-zA-Z0-9]/g, '');
}
