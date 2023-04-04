import * as React from 'react';
import LikeButton from '../UI/LikeButton';
import PlayButton from '../UI/PlayButton';
import { ISong } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/reduxhooks';
import classNames from 'classnames';
import { likeSong, unlikeSong } from '../../api/songApi';
import { Link } from 'react-router-dom';
import { setPlayerSongLikedStatus, toggleAudioIsPlaying } from '../../store/slices/playerSlice';

export interface ISongItemProps {
    index: number,
    song: ISong,
    onPlay: (e?: React.MouseEvent) => void,
}

export default function SongItem(props: ISongItemProps) {
    const [liked, setLiked] = React.useState<boolean>(props.song.liked);
    const [currentlyPlaying, setCurrentlyPlaying] = React.useState<boolean>(false);

    const dispatch = useAppDispatch();
    const playerState = useAppSelector(state => state.player)
    const isThisSongPlaying = playerState.songId === props.song.id

    // calculate the duration of the song in minutes and seconds.
    const duration = React.useMemo(() => {
        const duration = props.song.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }, [props.song.duration])


    // like or unlike a song.
    const likeSongHandler = React.useCallback(() => {
        if (liked) {
            unlikeSong(props.song.id)
            .then(() => {
                setLiked(false)
                // if this song is playing, update the like status of the song in action bar.
                if (isThisSongPlaying)
                    dispatch(setPlayerSongLikedStatus(false))
            })
        } else {
            likeSong(props.song.id)
            .then(() => {
                setLiked(true)
                // if this song is playing, update the like status of the song in action bar.
                if (isThisSongPlaying)
                    dispatch(setPlayerSongLikedStatus(true))
            })
        }
    }, [props.song.id, dispatch, isThisSongPlaying, liked])

    // play or pause a song if this song is playing.
    const playSongHandler = React.useCallback(() => {
        if (isThisSongPlaying) {
            dispatch(toggleAudioIsPlaying(null))
        } else {
            props.onPlay()
        }
    }, [ isThisSongPlaying, props, dispatch])

    // update the like and play status of the song if they changed by action bar.
    React.useEffect(() => {
        if (isThisSongPlaying) {
            setLiked(playerState.songLiked)
            setCurrentlyPlaying(playerState.audioIsPlaying)
        }
    }, [ playerState.songLiked, playerState.audioIsPlaying, isThisSongPlaying])

    return (
        <div 
            className={classNames(
                'grid grid-cols-12 text-white p-4 items-center duration-100 hover:bg-emerald-200/20',
                {'bg-emerald-200/20': currentlyPlaying},
            )}
            >
            <div className='col-span-6 flex flex-wrap items-center gap-x-3 grid-cols-12'>
                <div className='text-xl font-bold'>{props.index}</div>
                <img className='w-14 h-14' src={props.song.image} alt="" />
                <div>
                    <div className='text-lg font-bold'>{props.song.title}</div>
                    <div className='text-sm'>
                        {props.song.artists && props.song.artists.map((artist) => {
                            return (
                                <Link to={`/artists/${artist.id}`} key={artist.id}>
                                    <span className='text-sm hover:underline'>{artist.first_name} {artist.last_name}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='col-span-3'>{props.song.genres.join(', ')}</div>
            <div className='col-span-1'><LikeButton liked={liked} styles={{color: 'white'}} onClick={likeSongHandler} /></div>
            <div className='col-span-1'>{duration}</div>
            <div className='col-span-1'><PlayButton color='text-white' onClick={playSongHandler} isPlaying={currentlyPlaying} /></div>
        </div>
    );
}
