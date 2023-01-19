import * as React from 'react';
import LikeButton from '../UI/LikeButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export interface ISongItemProps {
}

export default function SongItem(props: ISongItemProps) {
    return (
        <div className='grid grid-cols-12 text-white p-4 items-center hover:bg-emerald-200/20 duration-100'>
            <div className='col-span-6 flex flex-wrap items-center gap-x-3'>
                <div className='text-xl font-bold'>1</div>
                <img className='w-14' src="https://seed-mix-image.spotifycdn.com/v6/img/artist/2sjnyyL9NXijL3Fr2eLikf/en/default" alt="" />
                <div>
                    <div className='text-lg font-bold'>Dur Dedik</div>
                    <div className='text-sm'>Aspova</div>
                </div>
            </div>
            <div className='col-span-4'>Artist</div>
            <div className='col-span-1'><LikeButton styles={{color: 'white'}} /></div>
            <div className='col-span-1'>2:25</div>
        </div>
    );
}
