import * as React from 'react';
import PlayButton from '../../components/UI/PlayButton';
import LikeButton from '../../components/UI/LikeButton';
import { IPlaylistDetail, ISong, SongsType } from '../../types';
import SongLIst from '../../components/Song/SongList';
import { useAppDispatch } from '../../store/reduxhooks';
import { changePlaylistAndSongAction } from '../../store/slices/playlistSlice';
import { likePlaylist, unlikePlaylist } from '../../api/songApi';

export interface IPlaylistProps {
    image?: string,
    playlistType: "Playlist" | "Artist",
    title: string,
    artists: string,
    durations: string,
    playPlaylist: (e?: React.MouseEvent) => void,
    hasLikeButton: boolean,
    songs: SongsType,
    playlist: IPlaylistDetail
}

export default function Playlist(props: IPlaylistProps) {
    const [liked, setLiked] = React.useState<boolean>(props.playlist.liked!);

    const dispatch = useAppDispatch();

    
    const playSongHandler = React.useCallback((song: ISong) => {
        dispatch(changePlaylistAndSongAction({song: song, playlist: props.playlist}))
    }, [dispatch, props.playlist])


    // like playlist if not liked, unlike if liked
    const likePlaylistHandler = React.useCallback((e?: React.MouseEvent) => {
        if (liked) {
            unlikePlaylist(props.playlist.id).then(response => {
                console.log('unliked', response.data)
                setLiked(false)
            })
        } else {
            likePlaylist(props.playlist.id).then(response => {
                console.log('liked', response.data)
                setLiked(true)
            })
        }
    }, [liked, props.playlist.id])


    return (
        <div className='p-10'>
            <div className='flex gap-5'>
                <div>
                    <img className='h-full w-60 object-cover shadow-2xl shadow-slate-400/80' src={props.image} alt={props.title} />
                </div>
                <div className='flex flex-col text-white justify-end'>
                    <div className='font-bold pb-5'>{props.playlistType.toUpperCase()}</div>
                    <div className='text-8xl font-bold pb-10'>{props.title}</div>
                    <div className='aaaa'>{props.artists}</div>
                    <div className='aaaa'>{props.durations}</div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='flex align-baseline gap-5'>
                    <PlayButton onClick={props.playPlaylist} />
                    {props.hasLikeButton && <LikeButton styles={{fontSize: 50, color: 'white'}} onClick={likePlaylistHandler} liked={liked}/>}
                </div>
                <div>
                    <SongLIst songs={props.songs} onChangeSong={playSongHandler} />
                </div>
            </div>
        </div>
    );
}