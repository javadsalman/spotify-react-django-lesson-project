export interface IAuthorSummary {
    "id": number,
    "first_name": string,
    "last_name": string,
    "username": string,
    "image": string
}

export interface IArtistSummary {
    "id": number,
    "first_name": string,
    "last_name": string,
}

export interface IPlaylist {
        "id": number,
        "author": IAuthorSummary,
        "title": string,
        "image": string,
        "color": string,
        "featured": boolean,
        "updated": string,
        "created": string,
        "hide": boolean
}

export type PlaylistsType = IPlaylist[]


export interface ISong {
    "id": number,
    "artists": IArtistSummary[],
    "genres": string[],
    "title": string,
    "image": string,
    "audio": string,
    "duration": number,
    "listen_count": number,
    "liked": boolean,
    "updated": string,
    "created": string
}

export type SongsType = ISong[]

export interface IPlaylistDetail {
    "id": number,
    "author"?: IAuthorSummary,
    "title": string,
    "image"?: string,
    "color"?: string,
    "featured"?: boolean,
    "updated"?: string,
    "created"?: string,
    "hide"?: boolean,
    "songs": SongsType
    "liked"?: boolean
}

export interface IArtist {
    "id": number,
    "first_name": string,
    "last_name": string,
    "image": string,
    "verified": boolean,
}

export type ArtistsType = IArtist[]

export interface ICustomerProfile {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    image: string;
    birth_date: string;
    gender: string;
    liked_songs: SongsType;
    followed_artists: ArtistsType;
    playlists: PlaylistsType;
    user_id: number;
}

export interface IAuthInfo {
    id: number,
    user_id: number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    birth_date: string,
    gender: string,
    token: string,
    remember_me?: boolean
}

export interface IGenreSummary {
    "id": number,
    "title": string,
    "color": string,
}

export type GenreSummriesType = IGenreSummary[]

export interface IGenreDetail {
    "id": number,
    "title": string,
    "color": string,
    "songs": SongsType
    "created": string,
    "updated": string,
}

export interface IArtistDetail {
    "id": number,
    "first_name": string,
    "last_name": string,
    "image": string,
    "cover": string,
    "verified": boolean,
    "songs": SongsType,
    "is_following": boolean,
}