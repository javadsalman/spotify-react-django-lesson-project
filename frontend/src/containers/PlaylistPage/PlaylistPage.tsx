import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylistDetail } from '../../api/songApi';
import { useAppDispatch } from '../../store/reduxhooks';
import { setPlaylistAction } from '../../store/slices/playlistSlice';
import { IPlaylistDetail } from '../../types';
import Playlist from '../Playlist/Playlist';

export interface IPlaylistPageProps {
}

export default function PlaylistPage (props: IPlaylistPageProps) {
  const [playlistDetail, setPlaylistDetail] = React.useState<IPlaylistDetail|null>(null)
  
  const { id } = useParams()

  const dispatch = useAppDispatch();

  const artists = React.useMemo(() => {
    if (!playlistDetail) return '';
    const artistSet = new Set()
    playlistDetail.songs.forEach(song => {
      song.artists.forEach(artist => {
        artistSet.add(artist)
      })
    })
    const artistList = Array.from(artistSet)
    let result = artistList.slice(0,2).join(', ')
    const otherARtists = artistList.slice(2)
    if (otherARtists.length > 0) {
      result += ` and ${otherARtists.length} more`
    }
    return result
  }, [playlistDetail])

  const durations = React.useMemo(() => {
    if (!playlistDetail) return '';
    let totalDuration = 0;
    playlistDetail.songs.forEach(song => {
      totalDuration += song.duration
    })
    const totalMinute = Math.floor(totalDuration / 60)
    const resultMinute = totalMinute % 60
    const resultHour = Math.floor(totalMinute / 60)
    return `${playlistDetail.songs.length} Songs, about ${resultHour} hr ${resultMinute} min`
  }, [playlistDetail])

  React.useEffect(() => {
    if (!id) return;
    getPlaylistDetail(+id).then(response => {
      setPlaylistDetail(response.data);
    })
  }, [id])

  const playPlaylistHandler = React.useCallback(() => {
    dispatch(setPlaylistAction({playlist: playlistDetail!}))
  }, [dispatch, playlistDetail])

  return (
    playlistDetail 
    && 
    <Playlist 
      image={playlistDetail.image}
      playlistType="Playlist"
      title={playlistDetail.title}
      artists={artists}
      durations={durations}
      playPlaylist={playPlaylistHandler}
      hasLikeButton={true}
      songs={playlistDetail.songs}
      playlist={playlistDetail}
    />
  )
}
