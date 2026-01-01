import { getAudioPaths, saveAudioPath, deleteAudioPath } from '@/lib/api/audioPath';
import { getSpotifySettings, saveSpotifySettings } from '@/lib/api/spotify';
import { useEffect, useState } from 'react';

export function useMusicPaths() {
	const [musicPaths, setMusicPaths] = useState<string[]>([]);
	const [newPath, setNewPath] = useState('');
	const [isSaving, setIsSaving] = useState(false);

	useEffect(() => {
		async function fetchMusicPaths() {
			try {
				const paths = await getAudioPaths();
				setMusicPaths(paths);
			} catch (error) {
				console.error('Error loading music paths:', error);
			}
		}
		fetchMusicPaths();
	}, []);

	async function handleAddPath() {
		if (!newPath.trim()) return;
		setIsSaving(true);
		try {
			await saveAudioPath(newPath);
			setNewPath('');
			const paths = await getAudioPaths();
			setMusicPaths(paths);
		} catch (error) {
			console.error('Error saving music path:', error);
			alert('Error saving music path. Please try again.');
		} finally {
			setIsSaving(false);
		}
	}

	async function handleRemovePath(path: string) {
		setIsSaving(true);
		try {
			await deleteAudioPath(path.trim());
			const paths = await getAudioPaths();
			setMusicPaths(paths);
		} catch (error) {
			console.error('Error removing music path:', error);
			alert('Error removing music path. Please try again.');
		} finally {
			setIsSaving(false);
		}
	}

	return {
		musicPaths,
		newPath,
		setNewPath,
		isSaving,
		handleAddPath,
		handleRemovePath,
		setMusicPaths,
	};
}

export function useSpotifySettingsService() {
	const [spotifySettings, setSpotifySettings] = useState({
		clientId: '',
		clientSecret: '',
	});
	const [isSpotifySaving, setIsSpotifySaving] = useState(false);

	useEffect(() => {
		async function fetchSpotifySettings() {
			try {
				const data = await getSpotifySettings();
				setSpotifySettings(data);
			} catch (error) {
				console.error('Error loading Spotify settings:', error);
			}
		}
		fetchSpotifySettings();
	}, []);

	async function handleSaveSpotifySettings() {
		setIsSpotifySaving(true);
		try {
			await saveSpotifySettings(spotifySettings);
			alert('Spotify settings saved successfully!');
		} catch (error) {
			console.error('Error saving Spotify settings:', error);
			alert('Error saving settings. Please try again.');
		} finally {
			setIsSpotifySaving(false);
		}
	}

	return {
		spotifySettings,
		setSpotifySettings,
		isSpotifySaving,
		handleSaveSpotifySettings,
	};
}
