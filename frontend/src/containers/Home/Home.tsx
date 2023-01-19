import * as React from 'react';
import HorizontalPlaylist from '../../components/Playlist/HorizontalPlaylist';
import VerticalPlaylist from '../../components/Playlist/VerticalPlaylist';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <div className='p-5'>
      <div className='text-white font-bold text-3xl mb-3'>Good Days</div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
        <HorizontalPlaylist />
      </div>
      <div className='text-white font-bold text-3xl mb-3'>New Playlists</div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        <VerticalPlaylist />
        <VerticalPlaylist />
        <VerticalPlaylist />
        <VerticalPlaylist />
        <VerticalPlaylist />
        <VerticalPlaylist />
        <VerticalPlaylist />
      </div>
    </div>
  );
}
