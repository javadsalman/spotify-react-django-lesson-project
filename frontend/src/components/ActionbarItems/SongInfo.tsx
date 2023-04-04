import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/reduxhooks';
import { toggleLikeSongAction } from '../../store/slices/playlistSlice';
import LikeButton from '../UI/LikeButton';
import { Link } from 'react-router-dom';

export interface ISongInfoProps {
}

export default function SongInfo (props: ISongInfoProps) {
  const playerState = useAppSelector((state) => state.player);

  
  const dispatch = useAppDispatch();

  const likeSongHandler = React.useCallback(() => {
    dispatch(toggleLikeSongAction(playerState.songId))
  }, [dispatch, playerState.songId])


  return (
    <div className='flex gap-2 items-center text-white'>
        {playerState.songTitle &&
        <>
          <div>
            <img className='h-16 w-16' src={playerState.songImage} alt="" />
          </div>
          <div className='flex flex-col justify-center'>
            <div>{playerState.songTitle}</div>
            <div>
              {playerState.songArtists && playerState.songArtists.length > 0 && playerState.songArtists.map((artist, index) => {
                return (
                  <Link to={`/artists/${artist.id}`} key={artist.id}>
                    <span className='text-sm hover:underline'>{artist.first_name} {artist.last_name}</span>
                  </Link>
                )
              }
              )}
            </div>
          </div>
          <div className='flex items-center'>
            <LikeButton styles={{color: 'white'}} liked={playerState.songLiked} onClick={likeSongHandler} />
          </div>
        </>
      }
    </div>
  );
}
