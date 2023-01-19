import * as React from 'react';
import { useParams } from 'react-router-dom';
import PlayButton from '../../components/UI/PlayButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import LikeButton from '../../components/UI/LikeButton';
import SongItem from '../../components/Song/SongItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export interface IGenreProps {
}

export default function Genre(props: IGenreProps) {

    const { id, slug } = useParams();

    return (
        <div className='p-10'>
            <div className='flex gap-5'>
                <div>
                    <img className='h-full w-60 object-cover shadow-2xl shadow-slate-400/80' src="https://seed-mix-image.spotifycdn.com/v6/img/artist/2sjnyyL9NXijL3Fr2eLikf/en/default" alt="" />
                </div>
                <div className='flex flex-col text-white justify-end'>
                    <div className='font-bold pb-5'>PLAYLIST</div>
                    <div className='text-8xl font-bold pb-10'>Aspova Mix</div>
                    <div className='aaaa'>Fuad, Asif and 8 more</div>
                    <div className='aaaa'>50 songs, about 2 hr 3 min</div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='flex align-baseline gap-5'>
                    <PlayButton />
                    <LikeButton styles={{fontSize: 50, color: 'white'}} />
                </div>
                <div>
                    <div className='grid grid-cols-12 text-white bg-stone-900 p-4'>
                        <div className='col-span-6'>Title</div>
                        <div className='col-span-4'>Genre</div>
                        <div className='col-span-1' />
                        <div className='col-span-1'><AccessTimeIcon /></div>
                    </div>
                    <div>
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                    </div>
                </div>
            </div>
        </div>
    );
}
