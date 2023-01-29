import * as React from 'react';
import { ISong, SongsType } from '../../types';
import SongItem from './SongItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export interface ISongLIstProps {
    songs: SongsType,
    onChangeSong: (song: ISong) => void
}

export default function SongLIst(props: ISongLIstProps) {
    return (
        <div>
            <div className='grid grid-cols-12 text-white bg-stone-900 p-4'>
                <div className='col-span-6 grid grid-cols-12'>
                    <div className='col-span-3'># Title</div>
                </div>
                <div className='col-span-4'>Genres</div>
                <div className='col-span-1'><AccessTimeIcon /></div>
            </div>
            <div>
                {props.songs.map((song, index) => {
                    return <SongItem key={song.id} index={index+1} song={song} onPlay={() => props.onChangeSong(song)} />
                })
                }
            </div>
        </div>
    );
}
