import * as React from 'react';
import LikeButton from '../UI/LikeButton';

export interface ISongInfoProps {
}

export default function SongInfo (props: ISongInfoProps) {
  return (
    <div className='flex gap-2 items-center text-white'>
      <div>
        <img className='h-16 w-16' src="https://seed-mix-image.spotifycdn.com/v6/img/artist/2sjnyyL9NXijL3Fr2eLikf/en/default" alt="" />
      </div>
      <div className='flex flex-col justify-center'>
        <div>Sushi</div>
        <div>Anil Piyanci, Contra</div>
      </div>
      <div className='flex items-center'>
        <LikeButton styles={{color: 'white'}} />
      </div>
    </div>
  );
}
