import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './HOC/Layout';
import { Routes, Route } from 'react-router-dom'
import Home from './containers/Home/Home';
import Songs from './containers/SongList/SongList';
import Search from './containers/Search/Search';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';

function App() {

  return (
    <div className="">
      <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/songs/' element={<Songs />} />
            <Route path='/search/*' element={<Search />} />
            <Route path='/register/' element={<Register />} />
            <Route path='/login/' element={<Login />} />
            <Route path="/profile/" element={<Profile />} />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
