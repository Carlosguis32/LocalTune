import { AudioElement } from '@/types';

export function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];

	for (let i = 0; i < array.length; i++) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled;
}

export function shuffleAudioQueue(queue: AudioElement[]): AudioElement[] {
	return shuffleArray(queue);
}

export function secondsToMinutesFormatted(value: number): string {
	if (!value) return '0:00';

	const hours = Math.floor(value / 3600);
	const minutes = Math.floor((value % 3600) / 60);
	const seconds = Math.floor(value % 60);

	if (hours > 0) {
		return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function convertDataStreamToImage(stream: string) {
	const byteArray = stream.split(',').map((num) => parseInt(num.trim()));
	const uint8Array = new Uint8Array(byteArray);
	const blob = new Blob([uint8Array], { type: 'image/jpeg' });
	const image = URL.createObjectURL(blob);

	return image;
}
