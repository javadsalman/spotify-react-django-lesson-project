import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './HOC/Layout';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './containers/Home/Home';
import Playlist from './containers/Playlist/Playlist';
import Search from './containers/Search/Search';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import { useAppDispatch, useAppSelector } from './store/reduxhooks';
import { checkAuthAction } from './store/slices/authSlice';
import PlaylistPage from './containers/PlaylistPage/PlaylistPage';
import { loadStoredPlaylist } from './store/slices/playlistSlice';

function App() {
  const {authStatus, authInfo} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(checkAuthAction())
    dispatch(loadStoredPlaylist())
  }, [dispatch])

  const routes = React.useMemo(() => {
    if (authStatus === 'loggedIn') {
      return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playlists/:id/' element={<PlaylistPage />} />
          <Route path='/search/*' element={<Search />} />
          <Route path='/profile/' element={<Profile />} />
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
