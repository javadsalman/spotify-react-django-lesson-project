import * as React from 'react';
import { IPlaylistDetail, SongsType } from '../../types';
import { getLikedSongs } from '../../api/songApi';
import { useAppDispatch } from '../../store/reduxhooks';
import like from '../../assets/images/like.png';
import Playlist from '../../containers/Playlist/Playlist';
import { getArtistName, getSongsDuration } from '../../shared/utils/playlist-utils';
import { setPlaylistAction } from '../../store/slices/playlistSlice';

export interface ILikedSongsPageProps {
}

export default function LikedSongsPage(props: ILikedSongsPageProps) {
    const [likedSongsPlaylist, setLikedSongsPlaylist] = React.useState<IPlaylistDetail>();

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        // get liked songs and create a dummy playlist
        getLikedSongs().then(response => {
            const songs: SongsType = response.data;
            const playlist: IPlaylistDetail = {
                "id": 0,
                "title": 'Liked Songs',
                "image": like,
                "color": 'purple',
                "featured": false,
                "hide": false,
                "songs": songs,
                "liked": false
            }
            setLikedSongsPlaylist(playlist)
        })
    }, [])

    // get artists and durations as readable string
    const [artists, durations] = React.useMemo(() => {
        if (!likedSongsPlaylist) return ['', '']
        const songs = likedSongsPlaylist.songs;
        return [getArtistName(songs), getSongsDuration(songs)]
    }, [likedSongsPlaylist])

    // play playlist
    const playPlaylistHandler = React.useCallback(() => {
        dispatch(setPlaylistAction({ playlist: likedSongsPlaylist! }))
    }, [dispatch, likedSongsPlaylist])


    return (
        <>
            {likedSongsPlaylist
                &&
                <Playlist
                    image={likedSongsPlaylist.image}
                    playlistType="Playlist"
                    title={likedSongsPlaylist.title}
                    artists={artists}
                    durations={durations}
                    playPlaylist={playPlaylistHandler}
                    hasLikeButton={false}
                    songs={likedSongsPlaylist.songs}
                    playlist={likedSongsPlaylist}
                />}
        </>
    );
}
