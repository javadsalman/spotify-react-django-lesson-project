import * as React from 'react';
import PlayButton from '../UI/PlayButton';
import Skeleton from '@mui/material/Skeleton';

{/* <Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={60} />
<Skeleton variant="rounded" width={210} height={60} /> */}



export interface IHorizontalPlaylistSceletonProps {
}

export default function HorizontalPlaylistSceleton (props: IHorizontalPlaylistSceletonProps) {
  return (
    <div className='h-24 flex gap-x-3 bg-zinc-700 duration-500 cursor-pointer rounded-lg'>
      <Skeleton variant='rounded' width="100%" height="100%" />
    </div>
  );
}
