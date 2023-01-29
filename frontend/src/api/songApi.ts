import { PlaylistsType } from "../types"
import iaxios from "./iaxios"


export const getLikedPlaylists = () => {
    return iaxios.get<PlaylistsType>('/liked-playlists/')
}

export const getPlaylists = () => {
    return iaxios.get<PlaylistsType>('/playlists/')
}

export const getPlaylistDetail =(id: number) => {
    return iaxios.get(`/playlists/${id}/`)
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