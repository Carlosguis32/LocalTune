'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { getMusicPaths, saveMusicPath } from '@/lib/api/musicPath';
import { useEffect, useState } from 'react';

export default function Settings() {
	const [musicPaths, setMusicPaths] = useState<string[]>([]);
	const [newPath, setNewPath] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);

	useEffect(() => {
		async function fetchMusicPaths() {
			try {
				const paths = await getMusicPaths();
				setMusicPaths(paths);
			} catch (error) {
				console.error('Error loading music paths:', error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchMusicPaths();
	}, []);

	async function handleAddPath() {
		if (!newPath.trim()) return;

		setIsSaving(true);

		try {
			await saveMusicPath(newPath.trim());
			setNewPath('');
			const paths = await getMusicPaths();
			setMusicPaths(paths);
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
						<FieldLabel>Saved Music Paths</FieldLabel>
						{musicPaths.length > 0 ? (
							<ul className="list-disc list-inside space-y-1">
								{musicPaths.map((path, index) => (
									<li key={index} className="text-sm">
										{path}
									</li>
								))}
							</ul>
						) : (
							<p className="text-sm text-gray-500">No paths saved yet.</p>
						)}
					</Field>

					<Field className="mt-4">
						<FieldLabel>Add New Path</FieldLabel>
						<div className="space-y-2">
							<Input
								autoComplete="off"
								placeholder="C:\Users\User\Music"
								value={newPath}
								onChange={(e) => setNewPath(e.target.value)}
							/>
							<p className="text-sm text-gray-600">Type or paste the full path to your music folder.</p>
							<Button onClick={handleAddPath} disabled={isSaving || !newPath.trim()}>
								{isSaving ? 'Adding...' : 'Add Path'}
							</Button>
						</div>
					</Field>
				</FieldGroup>
			</FieldSet>
		</main>
	);
}
