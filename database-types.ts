export type IsoAutoDateString = string & { readonly autodate: unique symbol };

interface CommonRecord {
	id: string;
	created: IsoAutoDateString;
	updated: IsoAutoDateString;
}

export interface AudioFileRecord extends CommonRecord {
	path?: string;
	spotifyId?: string;
	title?: string;
	artist?: string;
	album?: string;
	duration?: number;
}

export interface AudioPathRecord extends CommonRecord {
	path?: string;
}

// Type for AudioMetadata returned from Rust
export interface AudioFile {
	path: string;
	title?: string;
	artist?: string;
	album?: string;
	duration?: number;
	album_cover?: number[]; // Vec<u8> from Rust
	platform_ids: Record<string, string>;
}

// Spotify Playlist Types
export interface SpotifyImage {
	url: string;
	height?: number;
	width?: number;
}

export interface SpotifyOwner {
	id: string;
	display_name: string;
	uri?: string;
}

export interface SpotifyPlaylist {
	id: string;
	name: string;
	description?: string;
	images: SpotifyImage[];
	owner: SpotifyOwner;
	public: boolean;
	collaborative: boolean;
	tracks: {
		total: number;
	};
	uri?: string;
	snapshot_id: string;
	external_urls?: {
		spotify: string;
	};
}

export interface SpotifyArtist {
	id: string;
	name: string;
	uri?: string;
}

export interface SpotifyAlbum {
	id: string;
	name: string;
	images: SpotifyImage[];
	uri?: string;
}

export interface SpotifyTrack {
	id: string;
	name: string;
	artists: SpotifyArtist[];
	album: SpotifyAlbum;
	duration_ms: number;
	uri: string;
	is_local?: boolean;
	external_urls?: {
		spotify: string;
	};
}

export interface SpotifyPlaylistTrack {
	added_at: string;
	track: SpotifyTrack;
}
