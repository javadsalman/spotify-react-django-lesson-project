import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileDropdown from '../../components/Navbar/ProfileDropdown';
import SearchBar from '../../components/Search/SearchBar';
import { useAppSelector } from '../../store/reduxhooks';
import React from 'react';
import Button from '@mui/material/Button';
export interface INavbarProps {
}

export default function Navbar(props: INavbarProps) {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.authStatus) === 'loggedIn';
  const location = useLocation();

  // show register button if user is on login page and vice versa else show other navbar elements
  const contentJSX = React.useMemo(() => {
    if (isLoggedIn) {
      return (
        <>
          <div className='ml-10'>
            <ArrowCircleLeftOutlinedIcon onClick={() => navigate(-1)} className='text-white cursor-pointer hover:text-gray-400 duration-500 mr-4' fontSize='large' />
            <ArrowCircleRightOutlinedIcon onClick={() => navigate(1)} className='text-white cursor-pointer hover:text-gray-400 duration-500' fontSize='large' />
          </div>
          <div>
            <SearchBar />
          </div>

          <div className='ml-auto mr-10'>
            <ProfileDropdown />
          </div>
        </>
      )
    } else {
      if (location.pathname.includes('login'))
        return (
          <div className='ml-auto mr-10'>
            <Button onClick={() => {navigate('/register/')}} color="success" variant="contained">Register</Button>
          </div>
        )
      else if (location.pathname.includes('register'))
          return (
            <div className='ml-auto mr-10'>
              <Button onClick={() => {navigate('/login/')}} color="success" variant="contained">Login</Button>
            </div>
          )
    }
  }, [location.pathname, isLoggedIn, navigate])
  return (
    <div className='fixed top-0 w-[85%] p-4 bg-teal-800/60 flex items-center gap-4 z-20'>
      {contentJSX}
    </div>
  );
}
