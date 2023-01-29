
import * as React from 'react';
import PlayButton from '../UI/PlayButton';
import Skeleton from '@mui/material/Skeleton';



export interface IVerticalPlaylistSceletonProps {
}


export default function VerticalPlaylistSceleton (props: IVerticalPlaylistSceletonProps) {
  return (
    <div className='rounded-lg bg-neutral-600/70 hover:bg-neutral-600/50 duration-300 flex flex-col gap-y-2 text-white cursor-pointer h-80'>
      <Skeleton variant='rounded' width="100%" height="100%" />
    </div>
  );
}
