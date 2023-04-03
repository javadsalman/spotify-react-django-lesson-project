import React from 'react'
import Actionbar from '../containers/Actionbar/Actionbar'
import Navbar from '../containers/Navbar/Navbar'
import Sidebar from '../containers/Sidebar/Sidebar'
import { Snackbar, Alert } from '@mui/material'
import { closeToast } from '../store/slices/notificationSlice'
import { useAppDispatch, useAppSelector } from '../store/reduxhooks'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const {open: toastOpen, type: toastType, message: toastMessage} = useAppSelector(state => state.notification.toast)
  const dispatch = useAppDispatch()
  const toastClose = () => {dispatch(closeToast())}
  const isLoggedIn = useAppSelector((state) => state.auth.authStatus) === 'loggedIn';
  
  
  return (
    <React.Fragment>
      <div className='flex h-screen w-screen'>
          <Sidebar />
          <div className='bg-stone-800 w-full overflow-auto pt-20 pb-32'>
              <Navbar />
              {props.children}
          </div>
          {isLoggedIn && <Actionbar />}
      </div>
      <Snackbar open={toastOpen} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={6000} onClose={toastClose}>
        <Alert onClose={toastClose} severity={toastType} sx={{ width: '100%' }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </React.Fragment>
  )
}

export default Layout