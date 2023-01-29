import { Slider } from '@mui/material';
import * as React from 'react';
import PlayButton from '../UI/PlayButton';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from '../../store/reduxhooks';
import { setAudioIsPlaying, toggleAudioIsPlaying } from '../../store/slices/playerSlice';
import { selectBeforeSong, selectNextSong } from '../../store/slices/playlistSlice';

export interface IPlayerProps {
}

export default function Player(props: IPlayerProps) {
   const [sliderValue, setSliderValue] = React.useState<number>(0);
   
   const audioRef = React.useRef<HTMLAudioElement>(null);

   const playerState = useAppSelector(state => state.player);
   const dispatch = useAppDispatch();

   React.useEffect(() => {
      const audio = audioRef.current;
      if (!audio || !playerState.audioSrc) return;
      audioRef.current.src = playerState.audioSrc;
      audioRef.current.load()
      audioRef.current.play()
      dispatch(setAudioIsPlaying(true))
      audio.ontimeupdate = () => {
         const duration = audio.duration;
         const currentTime = audio.currentTime;
         const progress = (currentTime / duration) * 100;
         setSliderValue(progress)
      }
      audio.onended = () => {
         dispatch(selectNextSong())
      }
   }, [playerState.audioSrc, dispatch])




   React.useEffect(() => {
      const audio = audioRef.current;
      if (!audio || !playerState.audioSrc) return;
      audio.volume = playerState.audioVolume
   }, [playerState.audioVolume, playerState.audioSrc])


   React.useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;
      if (playerState.audioIsPlaying) {
         audio.play()
      } else {
         audio.pause()
      }
   }, [playerState.audioIsPlaying])

   const playHandler = React.useCallback(() => {
      dispatch(toggleAudioIsPlaying(null))
   }, [dispatch])

   const beforeHandler = React.useCallback(() => {
      dispatch(selectBeforeSong())
   }, [dispatch])

   const nextHandler = React.useCallback(() => {
      dispatch(selectNextSong())
   }, [dispatch])

   const playerSliderHandler = React.useCallback((e: Event, value: number | number[]) => {
      setSliderValue(value as number)
      const duration = audioRef.current!.duration
      const currentTime = (value as number * duration) / 100
      audioRef.current!.currentTime = currentTime
   }, [])

   React.useEffect(() => {
      const keyPressPlayerControl = (e: KeyboardEvent) => {
         if (e.code === 'Space') {
            playHandler()
         } 
         else if (e.code === 'ArrowLeft') {
            audioRef.current!.currentTime -= 5
         } else if (e.code === 'ArrowRight') {
            audioRef.current!.currentTime += 5
         }
      }
      document.addEventListener('keydown', keyPressPlayerControl)
      return () => {
         document.removeEventListener('keydown', keyPressPlayerControl)
      }
   }, [dispatch, playHandler])

   return (
      <div className='w-full'>
         <audio ref={audioRef} src="" className='none'></audio>
         <div className='flex justify-center'>
            <IconButton aria-label="delete" size="large" style={{ fontSize: 40, color: 'white' }} onClick={beforeHandler}>
               <FastRewindIcon fontSize="inherit" />
            </IconButton>
            <PlayButton color='text-white' onClick={playHandler} isPlaying={playerState.audioIsPlaying} />
            <IconButton aria-label="delete" size="large" style={{ fontSize: 40, color: 'white' }} onClick={nextHandler}>
               <FastForwardIcon fontSize="inherit" />
            </IconButton>
         </div>
         <div>
            <div>
               <Slider
                  size="small"
                  value={sliderValue || 0}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  onChange={playerSliderHandler}
               />
            </div>
         </div>
      </div>
   );
}
