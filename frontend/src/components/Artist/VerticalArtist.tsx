import * as React from 'react';
import { IArtist } from '../../types';

export interface IVerticalArtistProps {
  artist: IArtist
}

export default function VerticalArtist (props: IVerticalArtistProps) {
  return (
    <div className='flex flex-col rounded-lg p-6 bg-neutral-700/70 hover:bg-neutral-600/50 duration-300 cursor-pointer'>
      <div className='flex justify-center'>
        <img style={{width: 150, height: 150}} className='rounded-full object-cover object-center' src={props.artist.image} alt="" />
      </div>
      <div className='text-white font-bold text-lg mt-3'>{props.artist.first_name} {props.artist.last_name}</div>
      <div className='text-gray-900'>Artist</div>
    </div>
  );
}
