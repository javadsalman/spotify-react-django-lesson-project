import * as React from 'react';

export interface IVerticalArtistProps {
}

export default function VerticalArtist (props: IVerticalArtistProps) {
  return (
    <div className='flex flex-col rounded-lg p-6 bg-neutral-700/70 hover:bg-neutral-600/50 duration-300 cursor-pointer'>
      <div className='flex justify-center'>
        <img className='w-44 h-44 rounded-full object-cover object-center' src="https://seed-mix-image.spotifycdn.com/v6/img/artist/2sjnyyL9NXijL3Fr2eLikf/en/default" alt="" />
      </div>
      <div className='text-white font-bold text-lg mt-3'>Aspova</div>
      <div className='text-gray-900'>Artist</div>
    </div>
  );
}
