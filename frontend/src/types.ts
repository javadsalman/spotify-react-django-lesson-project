export interface IAuthorSummary {
    "id": number,
    "first_name": string,
    "last_name": string,
    "username": string,
    "image": string
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
    "artists": string[],
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
    "author": IAuthorSummary,
    "title": string,
    "image": string,
    "color": string,
    "featured": boolean,
    "updated": string,
    "created": string,
    "hide": boolean,
    "songs": SongsType
    "liked": boolean
}

