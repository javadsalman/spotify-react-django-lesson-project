import * as React from 'react';
import VerticalArtist from '../../components/Artist/VerticalArtist';
import VerticalPlaylist from '../../components/Playlist/VerticalPlaylist';

export interface IProfileProps {
}

export default function Profile (props: IProfileProps) {
  return (
    <div className='p-10'>
      <div className='flex gap-10 mb-10'>
        <div>
            <img className='w-52 h-52 object-cover rounded-full' src="https://seed-mix-image.spotifycdn.com/v6/img/artist/2sjnyyL9NXijL3Fr2eLikf/en/default" alt="" />
        </div>
        <div className='flex flex-col justify-end text-white '>
            <div>Profile</div>
            <div className='mb-9 mt-2 text-8xl font-bold'>Javad Salman</div>
            <div>18 playlists</div>
        </div>
      </div>
      <div>
        <div className='text-3xl text-white font-bold'>Followed Artists</div>
        <div className='grid grid-cols-5 gap-7 py-5'>
            <VerticalArtist />
            <VerticalArtist />
            <VerticalArtist />
            <VerticalArtist />
            <VerticalArtist />
        </div>
      </div>
      <div className='mt-5'>
        <div className='text-3xl text-white font-bold'>Public Playlists</div>
        <div className='grid grid-cols-5 py-5 gap-5'>
            {/* <VerticalPlaylist />
            <VerticalPlaylist />
            <VerticalPlaylist />
            <VerticalPlaylist />
            <VerticalPlaylist /> */}
        </div>
      </div>
    </div>
  );
}
