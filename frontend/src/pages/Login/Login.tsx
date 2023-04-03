import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { loginAction } from '../../store/slices/authSlice';
import { useAppDispatch } from '../../store/reduxhooks';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export interface IRegisterProps {
}

export default function Register(props: IRegisterProps) {
  const [user_info, setUserInfo] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);
  const dispatch = useAppDispatch()


  const loginHandler = React.useCallback(() => {
    dispatch(loginAction({ user_info: user_info, password: password, remember_me: rememberMe }))
  }, [user_info, password, dispatch, rememberMe])


  return (
    <ThemeProvider theme={darkTheme}>
      <div className='flex pt-20 justify-center'>
        <div className='basis-5/12'>
          <div className='text-4xl text-white font-bold mb-10 text-center'>To continue, log in to Spotify.</div>
          <div className='mt-5'>
            <TextField label="Username or Email" fullWidth variant="filled" id="outlined-basic" onChange={e => setUserInfo(e.target.value)} onKeyDown={e => e.key === 'Enter' && loginHandler()} />
          </div>
          <div className='mt-5'>
            <TextField label="Password" type="password" fullWidth variant="filled" id="outlined-basic" onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && loginHandler()} />
          </div>
          <div className='mt-5 text-2xl text-white'>
            <FormControlLabel
              control={<Checkbox value={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
              label="Remember Me"
              labelPlacement="end"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <div onClick={loginHandler} className='bg-emerald-600 hover:bg-emerald-400 duration-300 py-4 px-20 text-2xl font-bold text-black rounded-full cursor-pointer'>Sign In</div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
