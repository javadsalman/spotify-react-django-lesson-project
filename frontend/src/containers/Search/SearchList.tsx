import * as React from 'react';
import VerticalPlaylist from '../../components/Playlist/VerticalPlaylist';
import { IPlaylistDetail, ISong, PlaylistsType } from '../../types';
import SongList from '../../components/Song/SongList';
import { useAppDispatch } from '../../store/reduxhooks';
import { changePlaylistAndSongAction } from '../../store/slices/playlistSlice';

export interface ISearchListProps {
    songPlaylist: IPlaylistDetail;
    playlists: PlaylistsType;
}

export default function SearchList(props: ISearchListProps) {
    
    const dispatch = useAppDispatch()

    const changeSongHandler = React.useCallback((song: ISong) => {
        dispatch(changePlaylistAndSongAction({song: song, playlist: props.songPlaylist}))
    }, [ dispatch, props.songPlaylist])

    return (
        <div>
            <div className='text-4xl text-white font-bold mb-4'>Songs</div>
            <div className='mb-10'>
                <SongList songs={props.songPlaylist.songs} onChangeSong={changeSongHandler} />
            </div>
            <div className='text-4xl text-white font-bold mb-5'>Playlist</div>
            <div className='grid grid-cols-5 gap-5'>
                {props.playlists.map((playlist) => {
                    return (
                        <VerticalPlaylist playlist={playlist} key={playlist.id} />
                    )
                })
                }
            </div>
        </div>
    );
}
