import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { getPlaylistDetail } from '../../api/songApi';
import { useAppDispatch } from '../../store/reduxhooks';
import { setPlaylistAction } from '../../store/slices/playlistSlice';
import { IPlaylist } from '../../types';
import PlayButton from '../UI/PlayButton';

export interface IVerticalPlaylistProps {
  playlist: IPlaylist;
}



export default function VerticalPlaylist (props: IVerticalPlaylistProps) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // play playlist when play button is clicked and stop propagation to prevent navigate to playlist page
  const clickHandler = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    getPlaylistDetail(props.playlist.id).then(res => {
      dispatch(setPlaylistAction({playlist: res.data}))
    })
  }, [dispatch, props.playlist.id])

  // navigate to clicked playlist page
  const playlistClickHandler = React.useCallback(() => {
    navigate(`/playlists/${props.playlist.id}/`)
  }, [navigate, props.playlist.id])
  
  return (
    <div onClick={playlistClickHandler} className='rounded-lg p-4 bg-neutral-600/70 hover:bg-neutral-600/50 duration-300 flex flex-col gap-y-2 text-white cursor-pointer'>
      <div className='relative'>
        <img className='w-full h-56 rounded-lg object-cover' src={props.playlist.image} alt="" />
        <PlayButton className='absolute bottom-2 right-1' onClick={clickHandler} />
      </div>
      <div className='font-bold text-xl'>{props.playlist.title}</div>
      <div>{props.playlist.author.first_name} {props.playlist.author.last_name}</div>
    </div>
  );
}
