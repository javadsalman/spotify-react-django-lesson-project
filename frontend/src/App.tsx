import React from 'react';
import './App.css';
import Layout from './HOC/Layout';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Profile from './containers/Profile/Profile';
import { useAppDispatch, useAppSelector } from './store/reduxhooks';
import { checkAuthAction } from './store/slices/authSlice';
import PlaylistPage from './pages/PlaylistPage/PlaylistPage';
import { loadStoredPlaylist } from './store/slices/playlistSlice';
import LikedSongsPage from './pages/LikedSongsPage/LikedSongsPage';
import GenrePage from './pages/GenrePage/GenrePage';
import ArtistPage from './pages/ArtistPage/ArtistPage';

function App() {
  const {authStatus} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  // Checking autthenication status and loading stored playlist
  React.useEffect(() => {
    dispatch(checkAuthAction())
  }, [dispatch])
  
  React.useEffect(() => {
    // load playlist from local storage if user is logged in.
    if (authStatus === 'loggedIn')
      dispatch(loadStoredPlaylist())
  }, [authStatus, dispatch])

  const routes = React.useMemo(() => {
    if (authStatus === 'loggedIn') {
      return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playlists/:id/' element={<PlaylistPage />} />
          <Route path='/search/' element={<Search />} />
          <Route path='/search/:query/' element={<Search />} />
          <Route path='/genres/:genreId/' element={<GenrePage />} />
          <Route path='/profile/' element={<Profile />} />
          <Route path='/artists/:artistId' element={<ArtistPage />} />
          <Route path='/liked-songs/' element={<LikedSongsPage />} />
          <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
      )
    } else if (authStatus === 'loggedOut') {
      return (
        <Routes>
          <Route path='/register/' element={<Register />} />
          <Route path='/login/' element={<Login />} />
          <Route path='/*' element={<Navigate to="/login" />} />
        </Routes>
      )
    }
  }, [authStatus])

  return (
    <div className="">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;
