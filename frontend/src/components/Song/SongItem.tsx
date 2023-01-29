import * as React from 'react';
import LikeButton from '../UI/LikeButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayButton from '../UI/PlayButton';
import { ISong } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/reduxhooks';
import classNames from 'classnames';

export interface ISongItemProps {
    index: number,
    song: ISong,
    onPlay: (e?: React.MouseEvent) => void,
}

export default function SongItem(props: ISongItemProps) {

    const playerState = useAppSelector(state => state.player)
    const dispatch = useAppDispatch();

    const currentlyPlaying = React.useMemo(() => {
        return playerState.songId === props.song.id
    }, [playerState.songId, props.song.id])

    const duration = React.useMemo(() => {
        const duration = props.song.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }, [props.song.duration])
    
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
            <div className='col-span-1'><LikeButton styles={{color: 'white'}} /></div>
            <div className='col-span-1'>{duration}</div>
            <div className='col-span-1'><PlayButton color='text-white' onClick={props.onPlay} isPlaying={currentlyPlaying} /></div>
        </div>
    );
}
