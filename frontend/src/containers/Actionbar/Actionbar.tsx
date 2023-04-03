import * as React from 'react';
import Player from '../../components/ActionbarItems/Player';
import VolumeControl from '../../components/ActionbarItems/VolumeControl';
import SongInfo from '../../components/ActionbarItems/SongInfo';

export interface IActionbarProps {
}

export default function Actionbar (props: IActionbarProps) {
  
  return (
    <div className='absolute bottom-0 py-2 px-8 w-full bg-zinc-800 flex justify-between items-center'>
      <div><SongInfo /></div>
      <div className='basis-4/12'><Player /></div>
      <div><VolumeControl /></div>
    </div>
  );
}
