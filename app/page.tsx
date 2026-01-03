'use client';

import { exchangeToken } from '@/lib/api/spotify';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function HomeContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isProcessingAuth, setIsProcessingAuth] = useState(false);

	useEffect(() => {
		async function handleSpotifyCallback() {
			// Check if this is a Spotify callback (has 'code' parameter)
			const code = searchParams.get('code');
			const error = searchParams.get('error');

			if (error) {
				console.error('Spotify auth error:', error);
				alert('Authentication failed: ' + error);
				router.push('/settings');
				return;
			}

			if (code) {
				setIsProcessingAuth(true);
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
					// Clean URL and redirect
					window.history.replaceState({}, '', '/');
					router.push('/playlist');
				} catch (error) {
					console.error('Error exchanging token:', error);
					alert('Failed to authenticate. Please try again.');
					router.push('/settings');
				} finally {
					setIsProcessingAuth(false);
				}
			}
		}

		handleSpotifyCallback();
	}, [router, searchParams]);

	if (isProcessingAuth) {
		return (
			<main className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-2">Processing authentication...</h1>
					<p className="text-muted-foreground">Please wait while we connect to Spotify</p>
				</div>
			</main>
		);
	}

	return (
		<main className="flex items-center justify-center min-h-screen">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-4">Welcome to Melira</h1>
				<p className="text-muted-foreground">Your personal music library</p>
			</div>
		</main>
	);
}

export default function Home() {
	return (
		<Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
			<HomeContent />
		</Suspense>
	);
}
