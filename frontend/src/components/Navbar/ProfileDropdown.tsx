import * as React from 'react';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../store/reduxhooks';
import { logoutAction } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export default function ProfileDropDown() {

  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  

  const navigateToProfile = () => {
    navigate('/profile')
  }

  return (
    <div>
        <Button sx={{mr: 2}} onClick={navigateToProfile} color="success" variant="contained">Profile</Button>
        <Button onClick={() => dispatch(logoutAction())} color="success" variant="contained">Logout</Button>
    </div>
  );
}
