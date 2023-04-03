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
   const [audioIsLoaded, setAuIsdioLoaded] = React.useState<boolean>(false);
   
   const audioRef = React.useRef<HTMLAudioElement>(null);

   const playerState = useAppSelector(state => state.player);
   const dispatch = useAppDispatch();

   // change audio src when song is changed
   React.useEffect(() => {
      // check if audio is exist and if audioSrc is exist
      const audio = audioRef.current;
      if (!audio || !playerState.audioSrc) return;
      audioRef.current.src = playerState.audioSrc;
      audioRef.current.load()
      setAuIsdioLoaded(true)
      // play audio if shouldPlay is true
      if (!playerState.shouldPlay) return;
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
   }, [playerState.audioSrc, playerState.shouldPlay, dispatch])



   // change audio volume when volume is changed
   React.useEffect(() => {
      const audio = audioRef.current;
      if (!audio || !playerState.audioSrc) return;
      audio.volume = playerState.audioVolume
   }, [playerState.audioVolume, playerState.audioSrc])


   // play or pause audio when play button is clicked
   React.useEffect(() => {
      const audio = audioRef.current;
      // check if audio is exist and if audio is loaded
      if (!audio || !audioIsLoaded) return;
      if (playerState.audioIsPlaying) {
         audio.play()
      } else {
         audio.pause()
      }
   }, [playerState.audioIsPlaying, audioIsLoaded])

   // play or pause audio when space key is pressed
   const playHandler = React.useCallback(() => {
      dispatch(toggleAudioIsPlaying(null))
   }, [dispatch])

   // play previous song when left arrow key is pressed
   const beforeHandler = React.useCallback(() => {
      dispatch(selectBeforeSong())
   }, [dispatch])

   // play next song when right arrow key is pressed
   const nextHandler = React.useCallback(() => {
      dispatch(selectNextSong())
   }, [dispatch])

   // change audio current time when slider is changed
   const playerSliderHandler = React.useCallback((e: Event, value: number | number[]) => {
      setSliderValue(value as number)
      const duration = audioRef.current!.duration
      const currentTime = (value as number * duration) / 100
      audioRef.current!.currentTime = currentTime
   }, [])

   // play or pause audio when space key is pressed and change audio current time when left or right arrow key is pressed
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
      // remove event listener when component is unmounted
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
                  valueLabelDisplay="off"
                  onChange={playerSliderHandler}
               />
            </div>
         </div>
      </div>
   );
}
