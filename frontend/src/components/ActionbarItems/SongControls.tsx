import * as React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider/Slider';
export interface ISongControlProps {
}

export default function SongControl (props: ISongControlProps) {
  return (
    <div className='flex items-center w-48 gap-5'>
      <VolumeUpIcon style={{color: 'white'}} />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" size="small" />
    </div>
  );
}
