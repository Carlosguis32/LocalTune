'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useSpotifyAuth } from '@/context/spotify/spotify-auth-context';
import { usePlayerUtils } from '@/hooks/player/use-player-utils';
import { useMusicPaths, useSpotifySettingsService } from './page-services';

export default function Settings() {
	const { musicPaths, newPath, setNewPath, isLoading, isSaving, handleAddPath } = useMusicPaths();
	const { spotifySettings, setSpotifySettings, isSpotifyLoading, isSpotifySaving, handleSaveSpotifySettings } =
		useSpotifySettingsService();
	const { setNewAudioQueue } = usePlayerUtils();
	const { isAuthenticated, login, logout } = useSpotifyAuth();

	if (isLoading || isSpotifyLoading) {
		return (
			<main className="flex p-4 w-full">
				<div>Loading settings...</div>
			</main>
		);
	}

	return (
		<main className="flex flex-col p-4 w-full">
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
								placeholder="C:\\Users\\User\\Music"
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

				<Button onClick={() => setNewAudioQueue('krj95ctlc6j9vy4')}>Refresh queue</Button>
			</FieldSet>

			<FieldSet className="w-full mt-8">
				<FieldLegend>Spotify Settings</FieldLegend>
				<FieldDescription>Configure your Spotify API credentials for authentication.</FieldDescription>
				<FieldGroup>
					<Field>
						<FieldLabel>Client ID</FieldLabel>
						<Input
							autoComplete="off"
							placeholder="Your Spotify Client ID"
							value={spotifySettings.clientId}
							onChange={(e) => setSpotifySettings({ ...spotifySettings, clientId: e.target.value })}
						/>
						<p className="text-sm text-gray-600">Get this from your Spotify app dashboard.</p>
					</Field>

					<Field>
						<FieldLabel>Client Secret</FieldLabel>
						<Input
							autoComplete="off"
							type="password"
							placeholder="Your Spotify Client Secret"
							value={spotifySettings.clientSecret}
							onChange={(e) => setSpotifySettings({ ...spotifySettings, clientSecret: e.target.value })}
						/>
						<p className="text-sm text-gray-600">Keep this secret and secure.</p>
					</Field>

					<Button onClick={handleSaveSpotifySettings} disabled={isSpotifySaving} className="mt-4">
						{isSpotifySaving ? 'Saving...' : 'Save Settings'}
					</Button>

					{spotifySettings.clientId && spotifySettings.clientSecret && (
						<div className="mt-4">
							{isAuthenticated ? (
								<Button onClick={logout} variant="outline">
									Logout from Spotify
								</Button>
							) : (
								<Button onClick={login}>Login to Spotify</Button>
							)}
						</div>
					)}
				</FieldGroup>
			</FieldSet>
		</main>
	);
}
