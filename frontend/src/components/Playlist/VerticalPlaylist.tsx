import * as React from 'react';
import PlayButton from '../UI/PlayButton';

export interface IVerticalPlaylistProps {
}

{/* <img className='h-full rounded-l-lg object-cover' src="https://seed-mix-image.spotifycdn.com/v6/img/artist/2sjnyyL9NXijL3Fr2eLikf/en/default" alt="" /> */}

export default function VerticalPlaylist (props: IVerticalPlaylistProps) {
  return (
    <div className='rounded-lg p-4 bg-neutral-600/70 hover:bg-neutral-600/50 duration-300 flex flex-col gap-y-2 text-white cursor-pointer'>
      <div className='relative'>
        <img className='w-full h-56 rounded-lg object-cover' src="https://seed-mix-image.spotifycdn.com/v6/img/artist/2sjnyyL9NXijL3Fr2eLikf/en/default" alt="" />
        <PlayButton className='absolute bottom-2 right-1' />
      </div>
      <div className='font-bold text-xl'>Discover Weekly</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, odit.</div>
    </div>
  );
}
