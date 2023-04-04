import { GenreSummriesType, IArtistDetail, IGenreDetail, IPlaylistDetail, PlaylistsType, SongsType } from "../types"
import iaxios from "./iaxios"


export const getLikedPlaylists = () => {
    return iaxios.get<PlaylistsType>('/liked-playlists/')
}

export const getPlaylists = () => {
    return iaxios.get<PlaylistsType>('/playlists/')
}

export const getPlaylistDetail =(id: number) => {
    return iaxios.get<IPlaylistDetail>(`/playlists/${id}/`)
}

export const likeSong = (id: number) => {
    return iaxios.post(`/like-song/${id}/`)
}

export const unlikeSong = (id: number) => {
    return iaxios.post(`/unlike-song/${id}/`)
}

export const likePlaylist = (id: number) => {
    return iaxios.post(`/like-playlist/${id}/`)
}

export const unlikePlaylist = (id: number) => {
    return iaxios.post(`/unlike-playlist/${id}/`)
}

export const getLikedSongs = () => {
    return iaxios.get<SongsType>('/liked-songs/')
}

export const getGenreList = () => {
    return iaxios.get<GenreSummriesType>('/genres/')
}

export const getGenreDetail = (id: string) => {
    return iaxios.get<IGenreDetail>(`/genres/${id}/`)
}

export const searchSongs = (query: string) => {
    return iaxios.get<SongsType>(`/songs/?search=${query}`)
}

export const searchPlaylists = (query: string) => {
    return iaxios.get<PlaylistsType>(`/playlists/?search=${query}`)
}

export const getArtistDetail = (id: string) => {
    return iaxios.get<IArtistDetail>(`/artists/${id}/`)
}