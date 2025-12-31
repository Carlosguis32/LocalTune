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
}

export interface AudioPathRecord extends CommonRecord {
	path?: string;
}

export interface PlaylistRecord extends CommonRecord {
	audioFiles?: AudioFileRecord[];
	name?: string;
}
