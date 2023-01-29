import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { getPlaylistDetail } from '../../api/songApi';
import { useAppDispatch } from '../../store/reduxhooks';
import { setPlaylistAction } from '../../store/slices/playlistSlice';
import { IPlaylist } from '../../types';
import PlayButton from '../UI/PlayButton';

export interface IHorizontalPlaylistProps {
  playlist: IPlaylist;

}

export default function HorizontalPlaylist (props: IHorizontalPlaylistProps) {
  const navigate = useNavigate()

  const dispatch = useAppDispatch();

  const clickHandler = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    getPlaylistDetail(props.playlist.id).then(res => {
      dispatch(setPlaylistAction({playlist: res.data}))
    })
  }, [dispatch, props.playlist.id])

  const playlistClickHandler = React.useCallback(() => {
    navigate(`/playlists/${props.playlist.id}/`)
  }, [navigate, props.playlist.id])
  
  
  return (
    <div onClick={playlistClickHandler} className='h-24 flex gap-x-3 bg-emerald-200/30 hover:bg-emerald-400/40 duration-500 cursor-pointer rounded-lg'>
      <div className='h-full'>
        <img width={96} className='h-full rounded-l-lg object-cover' src={props.playlist.image} alt="" />
      </div>
      <div className='grow h-full flex flex-wrap content-center text-white font-bold text-xl'>
        <div>{props.playlist.title}</div>
      </div>
      <div className='flex flex-wrap content-center'>
        <PlayButton onClick={clickHandler} />
      </div>
    </div>
  );
}
