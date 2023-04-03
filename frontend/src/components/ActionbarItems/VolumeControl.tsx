import * as React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider/Slider';
import { useAppDispatch, useAppSelector } from '../../store/reduxhooks';
import { setVolume } from '../../store/slices/playerSlice';
export interface IVolumeControlProps {
}

export default function VolumeControl (props: IVolumeControlProps) {
  const playerState = useAppSelector(state => state.player);
  const dispatch = useAppDispatch();

  const volumeChangeHandler = React.useCallback((e: Event, value: number | number[]) => {
    dispatch(setVolume(value as number / 100))
  }, [dispatch])
  return (
    <div className='flex items-center w-48 gap-5'>
      <VolumeUpIcon style={{color: 'white'}} />
      <Slider value={playerState.audioVolume * 100} onChange={volumeChangeHandler} aria-label="Default" valueLabelDisplay="off" size="small" />
    </div>
  );
}
