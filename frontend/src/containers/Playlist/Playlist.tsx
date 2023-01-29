import * as React from 'react';
import { useParams } from 'react-router-dom';
import PlayButton from '../../components/UI/PlayButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import LikeButton from '../../components/UI/LikeButton';
import SongItem from '../../components/Song/SongItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { IPlaylistDetail, ISong, SongsType } from '../../types';
import SongLIst from '../../components/Song/SongLIst';
import { useAppDispatch, useAppSelector } from '../../store/reduxhooks';
import { changePlaylistAndSongAction, setPlaylistLiked } from '../../store/slices/playlistSlice';
import { likePlaylist, unlikePlaylist } from '../../api/songApi';

export interface IPlaylistProps {
    image: string,
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

    const dispatch = useAppDispatch();

    const playlistState = useAppSelector(state => state.playlist);
    
    const playSongHandler = React.useCallback((song: ISong) => {
        dispatch(changePlaylistAndSongAction({song: song, playlist: props.playlist}))
    }, [dispatch, props.playlist])

    const likePlaylistHandler = React.useCallback((e?: React.MouseEvent) => {
        if (playlistState.playlist.liked) {
            unlikePlaylist(props.playlist.id).then(response => {
                dispatch(setPlaylistLiked(false))
            })
        } else {
            likePlaylist(props.playlist.id).then(response => {
                dispatch(setPlaylistLiked(true))
            })
        }
    }, [props.playlist.id, dispatch, playlistState.playlist.liked])


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
                    {props.hasLikeButton && <LikeButton styles={{fontSize: 50, color: 'white'}} onClick={likePlaylistHandler} liked={playlistState.playlist.liked}/>}
                </div>
                <div>
                    <SongLIst songs={props.songs} onChangeSong={playSongHandler} />
                </div>
            </div>
        </div>
    );
}