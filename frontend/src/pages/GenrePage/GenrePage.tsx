import * as React from 'react';
import SongLIst from '../../components/Song/SongList';
import { useParams } from 'react-router-dom';
import { getGenreDetail } from '../../api/songApi';
import { IGenreDetail, IPlaylistDetail, ISong } from '../../types';
import { useAppDispatch } from '../../store/reduxhooks';
import { changePlaylistAndSongAction } from '../../store/slices/playlistSlice';

export interface IGenrePageProps {
}

export default function GenrePage(props: IGenrePageProps) {
    const [genreDetail, setGenreDetail] = React.useState<IGenreDetail>();
    const [genrePlaylist, setGenrePlaylist] = React.useState<IPlaylistDetail>();

    const {genreId} = useParams<{genreId: string}>();

    const dispatch = useAppDispatch();


    React.useEffect(() => {
        if (!genreId) return;
        getGenreDetail(genreId!).then((res) => {
            setGenreDetail(res.data);
            // create a dummy playlist for songs in genre
            const newgenrePlaylist: IPlaylistDetail = {
                id: 0,
                title: res.data.title,
                songs: res.data.songs,
                liked: false,
            }
            setGenrePlaylist(newgenrePlaylist)
        })
    }, [genreId])

    const playSongHandler = React.useCallback((song: ISong) => {
        dispatch(changePlaylistAndSongAction({song: song, playlist: genrePlaylist!}))
    }, [dispatch, genrePlaylist])

    
    
    return (
        <div className='p-10'>
            <div className='text-7xl text-white font-bold mb-10'>{genreDetail?.title || ''}</div>
            {genreDetail?.songs && <SongLIst songs={genreDetail.songs} onChangeSong={playSongHandler}/>}
        </div>
    );
}
