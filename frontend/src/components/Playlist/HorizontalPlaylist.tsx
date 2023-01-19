import * as React from 'react';
import PlayButton from '../UI/PlayButton';

export interface IHorizontalPlaylistProps {
}

export default function HorizontalPlaylist (props: IHorizontalPlaylistProps) {
  return (
    <div className='h-24 flex gap-x-3 bg-emerald-200/30 hover:bg-emerald-400/40 duration-500 cursor-pointer rounded-lg'>
      <div className='h-full'>
        <img className='h-full rounded-l-lg object-cover' src="https://seed-mix-image.spotifycdn.com/v6/img/artist/2sjnyyL9NXijL3Fr2eLikf/en/default" alt="" />
      </div>
      <div className='grow h-full flex flex-wrap content-center text-white font-bold text-xl'>
        <div>Aspova Mix</div>
      </div>
      <div className='flex flex-wrap content-center'>
        <PlayButton />
      </div>
    </div>
  );
}
