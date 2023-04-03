import * as React from 'react';
import LikeButton from '../UI/LikeButton';
import PlayButton from '../UI/PlayButton';
import { ISong } from '../../types';
import { useAppSelector } from '../../store/reduxhooks';
import classNames from 'classnames';
import { likeSong, unlikeSong } from '../../api/songApi';

export interface ISongItemProps {
    index: number,
    song: ISong,
    onPlay: (e?: React.MouseEvent) => void,
}

export default function SongItem(props: ISongItemProps) {
    const [liked, setLiked] = React.useState<boolean>(props.song.liked);

    const playerState = useAppSelector(state => state.player)

    // Determine if the song is currently playing to choose the correct icon between play and pause.
    const currentlyPlaying = React.useMemo(() => {
        return playerState.songId === props.song.id && playerState.audioIsPlaying
    }, [playerState.songId, props.song.id, playerState.audioIsPlaying])

    // calculate the duration of the song in minutes and seconds.
    const duration = React.useMemo(() => {
        const duration = props.song.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }, [props.song.duration])

    // like or unlike a song.
    const likeSongHandler = React.useCallback(() => {
        if (props.song.liked) {
            unlikeSong(props.song.id)
            .then(() => {
                setLiked(false)
            })
        } else {
            likeSong(props.song.id)
            .then(() => {
                setLiked(true)
            })
        }
    }, [props.song.liked, props.song.id, setLiked])

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
                    <div className='text-sm'>{props.song.artists.join(', ')}</div>
                </div>
            </div>
            <div className='col-span-3'>{props.song.genres.join(', ')}</div>
            <div className='col-span-1'><LikeButton liked={liked} styles={{color: 'white'}} onClick={likeSongHandler} /></div>
            <div className='col-span-1'>{duration}</div>
            <div className='col-span-1'><PlayButton color='text-white' onClick={props.onPlay} isPlaying={currentlyPlaying} /></div>
        </div>
    );
}
