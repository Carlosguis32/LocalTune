'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { pClass, Small } from '@/components/ui/typography';
import { useSpotifyAuth } from '@/context/spotify/spotify-auth-context';
import { usePlayerUtils } from '@/hooks/player/use-player-utils';
import { X } from 'lucide-react';
import { useMusicPaths, useSpotifySettingsService } from './page-services';

export default function Settings() {
	const { musicPaths, newPath, setNewPath, isSaving, handleAddPath, handleRemovePath } = useMusicPaths();
	const { spotifySettings, setSpotifySettings, isSpotifySaving, handleSaveSpotifySettings } =
		useSpotifySettingsService();
	const { setNewAudioQueue } = usePlayerUtils();
	const { isAuthenticated, login, logout } = useSpotifyAuth();

	return (
		<div className="flex flex-col p-6 w-full gap-16">
			<FieldSet className="w-full">
				<FieldLegend>Music settings</FieldLegend>
				<FieldDescription>Input your preferences for your music</FieldDescription>
				<FieldGroup>
					<Field>
						<FieldLabel>Saved Music Paths</FieldLabel>
						{musicPaths.length > 0 ? (
							<ul className="space-y-1">
								{musicPaths.map((path, index) => (
									<li key={index} className="flex items-center gap-1">
										<Badge className={`${pClass} bg-accent cursor-default`}>{path}</Badge>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleRemovePath(path)}
											disabled={isSaving}
										>
											<X />
										</Button>
									</li>
								))}
							</ul>
						) : (
							<Small>No paths saved yet</Small>
						)}
					</Field>

					<Field className="mt-4">
						<FieldLabel>Add New Path</FieldLabel>
						<div className="flex gap-2">
							<Input
								autoComplete="off"
								placeholder="C:\Users\User\Music"
								value={newPath}
								onChange={(e) => setNewPath(e.target.value)}
							/>
							<Button onClick={handleAddPath} disabled={isSaving || !newPath.trim()}>
								{isSaving ? 'Adding...' : 'Add Path'}
							</Button>
						</div>
						<Small>Type or paste the full path to your music folder.</Small>
					</Field>
				</FieldGroup>

				<Button onClick={() => setNewAudioQueue('krj95ctlc6j9vy4')}>Refresh queue (will be deleted)</Button>
			</FieldSet>

			<FieldSet className="w-full">
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
						<Small>Get this from your Spotify app dashboard.</Small>
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
						<Small>Keep this secret and secure.</Small>
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
		</div>
	);
}
