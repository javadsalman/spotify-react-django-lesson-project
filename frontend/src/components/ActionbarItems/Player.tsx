import { Slider } from '@mui/material';
import * as React from 'react';
import PlayButton from '../UI/PlayButton';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import IconButton from '@mui/material/IconButton';

export interface IPlayerProps {
}

export default function Player (props: IPlayerProps) {
  return (
    <div className='w-full'>
      <div className='flex justify-center'>
        <IconButton aria-label="delete" size="large" style={{fontSize: 40, color: 'white'}}>
            <FastRewindIcon fontSize="inherit" />
        </IconButton>
        <PlayButton color='text-white'/>
        <IconButton aria-label="delete" size="large" style={{fontSize: 40, color: 'white'}}>
            <FastForwardIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div>
        <div>
            <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
            />
        </div>
      </div>
    </div>
  );
}
