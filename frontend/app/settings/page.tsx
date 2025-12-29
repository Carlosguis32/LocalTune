'use client';

import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { getMusicPaths, saveMusicPath } from '@/lib/functions';

export default function Settings() {
	const [musicPath, setMusicPath] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);

	useEffect(() => {
		loadMusicPath();
	}, []);

	async function loadMusicPath() {
		try {
			const paths = await getMusicPaths();
			if (paths.length > 0) {
				setMusicPath(paths[0]);
			}
		} catch (error) {
			console.error('Error loading music path:', error);
		} finally {
			setIsLoading(false);
		}
	}

	async function handleSave() {
		if (!musicPath.trim()) return;

		setIsSaving(true);
		try {
			await saveMusicPath(musicPath.trim());
			alert('Music path saved successfully!');
		} catch (error) {
			console.error('Error saving music path:', error);
			alert('Error saving music path. Please try again.');
		} finally {
			setIsSaving(false);
		}
	}

	if (isLoading) {
		return (
			<main className="flex p-4 w-full">
				<div>Loading settings...</div>
			</main>
		);
	}

	return (
		<main className="flex p-4 w-full">
			<FieldSet className="w-full">
				<FieldLegend>Music settings</FieldLegend>
				<FieldDescription>Input your preferences for your music</FieldDescription>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="music-path">Full path to the folder with your music</FieldLabel>
						<Input
							id="music-path"
							autoComplete="off"
							placeholder="C:\Users\User\Music"
							value={musicPath}
							onChange={(e) => setMusicPath(e.target.value)}
						/>
					</Field>
					<div className="mt-4">
						<Button onClick={handleSave} disabled={isSaving}>
							{isSaving ? 'Saving...' : 'Save Path'}
						</Button>
					</div>
				</FieldGroup>
			</FieldSet>
		</main>
	);
}
