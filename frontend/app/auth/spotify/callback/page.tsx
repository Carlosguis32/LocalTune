'use client';

import { exchangeToken } from '@/lib/api/spotify';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function SpotifyCallbackContent() {
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		async function handleCallback() {
			const code = searchParams.get('code');
			const error = searchParams.get('error');

			if (error) {
				console.error('Auth error:', error);
				alert('Authentication failed: ' + error);
				router.push('/settings');
				return;
			}

			if (!code) {
				alert('No authorization code received');
				router.push('/settings');
				return;
			}

			const codeVerifier = sessionStorage.getItem('spotify_code_verifier');
			if (!codeVerifier) {
				alert('Code verifier not found. Please try again.');
				router.push('/settings');
				return;
			}

			try {
				await exchangeToken(code, codeVerifier);
				sessionStorage.removeItem('spotify_code_verifier');
				alert('Successfully authenticated with Spotify!');
				router.push('/');
			} catch (error) {
				console.error('Error exchanging token:', error);
				alert('Failed to authenticate. Please try again.');
				router.push('/settings');
			}
		}

		handleCallback();
	}, [router, searchParams]);

	return <div>Processing authentication...</div>;
}

export default function SpotifyCallback() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SpotifyCallbackContent />
		</Suspense>
	);
}