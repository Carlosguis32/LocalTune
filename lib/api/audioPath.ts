import { invoke } from '@tauri-apps/api/core';
import { AudioFile } from '@/database-types';

export async function getAudioPaths(): Promise<string[]> {
	try {
		const paths = await invoke<string[]>('get_audio_paths');
		return paths;
	} catch (error) {
		console.error('Error fetching audio paths:', error);
		return [];
	}
}

export async function saveAudioPath(path: string): Promise<void> {
	try {
		await invoke('save_audio_path', { path });
	} catch (error) {
		console.error('Error saving audio path:', error);
		throw error;
	}
}

export async function deleteAudioPath(path: string): Promise<void> {
	try {
		await invoke('delete_audio_path', { path });
	} catch (error) {
		console.error('Error deleting audio path:', error);
		throw error;
	}
}

export async function getAllLocalAudioFiles(): Promise<AudioFile[]> {
	try {
		const files = await invoke<AudioFile[]>('get_all_local_audio_files');
		return files;
	} catch (error) {
		console.error('Error fetching local audio files:', error);
		return [];
	}
}
