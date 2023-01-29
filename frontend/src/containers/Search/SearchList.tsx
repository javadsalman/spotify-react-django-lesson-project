import * as React from 'react';
import VerticalPlaylist from '../../components/Playlist/VerticalPlaylist';
import SongItem from '../../components/Song/SongItem';

export interface ISearchListProps {
}

export default function SearchList(props: ISearchListProps) {
    return (
        <div>
            <div className='text-4xl text-white font-bold ml-5 mb-3'>Songs</div>
            <div className='mb-10'>
                {/* <SongItem /> */}
            </div>
            <div className='text-4xl text-white font-bold ml-5 mb-5'>Playlist</div>
            <div className='grid grid-cols-5 gap-5'>
                {/* <VerticalPlaylist />
                <VerticalPlaylist />
                <VerticalPlaylist />
                <VerticalPlaylist />
                <VerticalPlaylist /> */}
            </div>
        </div>
    );
}
