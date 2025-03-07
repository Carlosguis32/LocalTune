import { useRef, useState, useEffect, useCallback } from 'react';
import SliderComponent from '../components/base/SliderComponent';
import PlayerControllers from '../components/custom/PlayerControllers';
import { secondsToMinutesFormatted, shuffleArray } from '../Functions';
import { PlayerState } from '../Types';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

const DEBUG = import.meta.env.VITE_DEBUG === 'true';

function Player() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isInModeRepeat, setIsInModeRepeat] = useState(false);
	const [isInModeShuffle, setIsInModeShuffle] = useState(true);
	const [audioFiles, setAudioFiles] = useState<string[]>([]);
	const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState('');
	const [audioQueue, setAudioQueue] = useState<string[]>([]);
	const [queueAudioIndexPlaying, setQueueAudioIndexPlaying] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [audioFilesFolder, setAudioFilesFolder] = useState(
		'C:\\Users\\cpast\\Desktop\\03 - Música'
	);

	const savePlayerState = useCallback(async () => {
		const playerState: PlayerState = {
			queueState: audioQueue,
			shuffleState: isInModeShuffle,
			repeatState: isInModeRepeat,
			audioNameState: currentlyPlayingAudio,
			queueIndexState: queueAudioIndexPlaying,
		};

		localStorage.setItem('playerState', JSON.stringify(playerState));

		if (DEBUG) {
			console.log('Guardando playerState:', playerState);
		}
	}, [
		audioQueue,
		isInModeShuffle,
		isInModeRepeat,
		currentlyPlayingAudio,
		queueAudioIndexPlaying,
	]);

	const loadPlayerState = useCallback(async () => {
		const playerState = localStorage.getItem('playerState');

		if (playerState) {
			try {
				const parsedPlayerState: PlayerState = JSON.parse(playerState);

				setAudioQueue(parsedPlayerState.queueState || []);
				setIsInModeShuffle(!!parsedPlayerState.shuffleState);
				setIsInModeRepeat(parsedPlayerState.repeatState);
				setCurrentlyPlayingAudio(parsedPlayerState.audioNameState);
				setQueueAudioIndexPlaying(parsedPlayerState.queueIndexState);
			} catch (error) {
				console.error('Error parsing playerState:', error);
			}
		}
	}, []);

	useEffect(() => {
		loadPlayerState();
	}, [loadPlayerState]);

	useEffect(() => {
		async function fetchAudioFiles() {
			try {
				const response = await fetch(
					`http://localhost:8571/api/audio-folder/${encodeURIComponent(
						audioFilesFolder
					)}`
				);

				if (!response.ok) {
					throw new Error('Error fetching audio files');
				}

				const data = await response.json();
				setAudioFiles(data);
			} catch (error) {
				console.error('Error:', error);
			}
		}

		fetchAudioFiles();
	}, [audioFilesFolder]);

	useEffect(() => {
		const playAudio = async () => {
			if (audioRef.current) {
				try {
					await audioRef.current.play();
					setIsPlaying(true);
				} catch (error) {
					console.error('Error:', error);
					setIsPlaying(false);
				} finally {
					savePlayerState();
				}
			} else {
				setIsPlaying(false);
			}
		};

		playAudio();
	}, [currentlyPlayingAudio, savePlayerState]);

	useEffect(() => {
		const audioName = audioQueue[queueAudioIndexPlaying];

		const fullPath = `${audioFilesFolder}\\${audioName}`;

		if (audioRef.current && audioFiles.length > 0) {
			audioRef.current.src = `http://localhost:8571/api/audio/${encodeURIComponent(
				fullPath
			)}`;

			setCurrentlyPlayingAudio(audioName);
		}
	}, [
		audioFiles.length,
		audioFilesFolder,
		audioQueue,
		queueAudioIndexPlaying,
	]);

	useEffect(() => {
		if (audioRef.current) {
			const audio = audioRef.current;

			const handleTimeUpdate = () => {
				setCurrentTime(audio.currentTime);
			};

			const handleDurationChange = () => {
				setDuration(audio.duration);
			};

			audio.addEventListener('timeupdate', handleTimeUpdate);
			audio.addEventListener('durationchange', handleDurationChange);

			return () => {
				audio.removeEventListener('timeupdate', handleTimeUpdate);
				audio.removeEventListener(
					'durationchange',
					handleDurationChange
				);
			};
		}
	}, []);

	function handleSeek(value: number) {
		if (audioRef.current) {
			audioRef.current.currentTime = value;
			setCurrentTime(value);
		}
	}

	function handlePlayPause() {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
				setIsPlaying(false);

				if (DEBUG) {
					console.log('Paused');
				}
			} else {
				audioRef.current.play();
				setIsPlaying(true);

				if (DEBUG) {
					console.log('Played');
				}
			}
		}
	}

	async function handleShuffle() {
		if (audioFiles) {
			if (!isInModeShuffle) {
				setQueueAudioIndexPlaying(0);
				setAudioQueue(shuffleArray(audioFiles));

				if (DEBUG) {
					console.log('Queue shuffled');
				}
			} else {
				setQueueAudioIndexPlaying(
					audioFiles.indexOf(audioQueue[queueAudioIndexPlaying])
				);
				setAudioQueue(audioFiles);

				if (DEBUG) {
					console.log('Queue ordered');
				}
			}

			savePlayerState();
		}

		setIsInModeShuffle(!isInModeShuffle);
	}

	const handleRepeat = () => {
		setIsInModeRepeat(!isInModeRepeat);
		savePlayerState();
	};

	async function handleNextAudio() {
		if (audioQueue && queueAudioIndexPlaying < audioQueue.length) {
			setQueueAudioIndexPlaying(queueAudioIndexPlaying + 1);

			if (audioRef.current) {
				if (isPlaying) {
					audioRef.current.pause();
					audioRef.current.play();
				} else {
					audioRef.current.play();
				}
			}

			savePlayerState();

			if (DEBUG) {
				console.log('Next audio');
			}
		}
	}

	function handlePreviousAudio() {
		if (audioQueue && queueAudioIndexPlaying > 0) {
			setQueueAudioIndexPlaying(queueAudioIndexPlaying - 1);

			if (audioRef.current) {
				if (isPlaying) {
					audioRef.current.pause();
					audioRef.current.play();
				} else {
					audioRef.current.play();
				}
			}

			savePlayerState();

			if (DEBUG) {
				console.log('Previous audio');
			}
		}
	}

	return (
		<SidebarProvider>
			<AppSidebar />

			<div className="fixed inset-0 flex items-center justify-center">
				<div className="flex flex-col items-center justify-center w-full max-w-md gap-8 p-6 bg-black/90 border rounded-xl border-neutral-800/40 shadow-[0px_20px_20px_0px_rgba(0,0,0,0.8)] hover:shadow-[0px_40px_40px_0px_rgba(0,0,0,1)] transition-all duration-300">
					<audio
						ref={audioRef}
						onEnded={() => {
							if (isInModeRepeat) {
								if (audioRef.current) {
									audioRef.current.currentTime = 0;
									audioRef.current
										.play()
										.catch((e) =>
											console.error(
												'Error playing audio:',
												e
											)
										);
								}
							} else {
								setQueueAudioIndexPlaying(
									queueAudioIndexPlaying + 1
								);
							}
						}}
						className="hidden"
					/>

					<div className="w-[400px]">
						<img
							src="src\assets\AlbumImageTest.jpg"
							alt="Image"
							className="rounded-md object-cover"
						/>
					</div>
					<div className="w-full max-w-md text-center">
						{currentlyPlayingAudio ? (
							<div>
								<p className="text-xl font-medium text-foreground truncate">
									{currentlyPlayingAudio.replace(
										/\.[^/.]+$/,
										''
									)}
								</p>

								<p className="text-m font-medium text-muted-foreground">
									{currentlyPlayingAudio.replace(
										/\.[^/.]+$/,
										''
									)}
								</p>
							</div>
						) : (
							<p className="h-7" />
						)}
					</div>
					<div className="w-full max-w-md flex flex-col gap-8">
						<div className="flex items-center justify-between gap-4">
							<p className="text-sm text-muted-foreground min-w-[3ch]">
								{secondsToMinutesFormatted(currentTime) ||
									'0:00'}
							</p>

							<div className="flex-grow">
								<SliderComponent
									currentTime={currentTime}
									duration={duration}
									onSeek={handleSeek}
								/>
							</div>

							<p className="text-sm text-muted-foreground min-w-[3ch]">
								{secondsToMinutesFormatted(duration) || '0:00'}
							</p>
						</div>

						<div className="flex justify-center">
							<PlayerControllers
								isPlaying={isPlaying}
								isInModeShuffle={isInModeShuffle}
								isInModeRepeat={isInModeRepeat}
								handlePlayPause={handlePlayPause}
								handleShuffle={handleShuffle}
								handleRepeat={handleRepeat}
								handleNextAudio={handleNextAudio}
								handlePreviousAudio={handlePreviousAudio}
							/>
						</div>
					</div>
				</div>
			</div>
		</SidebarProvider>
	);
}

export default Player;
