import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylistDetail, likePlaylist, unlikePlaylist } from '../../api/songApi';
import { useAppDispatch } from '../../store/reduxhooks';
import { setPlaylistAction } from '../../store/slices/playlistSlice';
import { IPlaylistDetail } from '../../types';
import Playlist from '../../containers/Playlist/Playlist';
import { getSongsDuration, getArtistName } from '../../shared/utils/playlist-utils';

export interface IPlaylistPageProps {
}

export default function PlaylistPage(props: IPlaylistPageProps) {
    const [playlistDetail, setPlaylistDetail] = React.useState<IPlaylistDetail | null>(null)

    const { id } = useParams()

    const dispatch = useAppDispatch();

    // get artists and durations as readable string
    const [artists, durations] = React.useMemo(() => {
        if (!playlistDetail) return ['', '']
        const songs = playlistDetail.songs;
        return [getArtistName(songs), getSongsDuration(songs)]
    }, [playlistDetail])

    // get playlist detail
    React.useEffect(() => {
        if (!id) return;
        getPlaylistDetail(+id).then(response => {
            setPlaylistDetail(response.data);
        })
    }, [id])

    // play playlist
    const playPlaylistHandler = React.useCallback(() => {
        dispatch(setPlaylistAction({ playlist: playlistDetail! }))
    }, [dispatch, playlistDetail])

    // like playlist if not liked, unlike if liked
    const likePlaylistHandler = React.useCallback((e?: React.MouseEvent) => {
        if (!playlistDetail) return;
        if (playlistDetail.liked) {
            unlikePlaylist(playlistDetail.id).then(response => {
                setPlaylistDetail(prev => {
                    return { ...prev!, liked: false }
                })
            })
        } else {
            likePlaylist(playlistDetail.id).then(response => {
                setPlaylistDetail(prev => {
                    return { ...prev!, liked: true }
                })
            })
        }
    }, [playlistDetail])

    return (
        playlistDetail
        &&
        <Playlist
            image={playlistDetail.image}
            playlistType="Playlist"
            title={playlistDetail.title}
            artists={artists}
            durations={durations}
            playPlaylist={playPlaylistHandler}
            toggleLikePlaylist={likePlaylistHandler}
            hasLikeButton={true}
            songs={playlistDetail.songs}
            playlist={playlistDetail}
        />
    )
}
