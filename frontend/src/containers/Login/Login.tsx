import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { loginAction } from '../../store/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export interface IRegisterProps {
}

export default function Register (props: IRegisterProps) {
  const dispatch = useAppDispatch()
  const loginData = useAppSelector((state) => state.auth.authInfo)

  console.log(loginData)

  const loginHandler = React.useCallback(() => {
    dispatch(loginAction({user_info: 'ehmed', password: '1234'}))
  }, [])

  return (
     <ThemeProvider theme={darkTheme}>
          <div className='flex pt-20 justify-center'>
               <div className='basis-5/12'>
                    <div className='text-4xl text-white font-bold mb-10 text-center'>To continue, log in to Spotify.</div>
                    <div className='mt-5'>
                         <TextField label="Username or Email" fullWidth  variant="filled" id="outlined-basic"/>
                    </div>
                    <div className='mt-5'>
                         <TextField label="Password" fullWidth  variant="filled" id="outlined-basic"/>
                    </div>
                    <div className='mt-5 text-2xl text-white'>
                      <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="Remember Me"
                        labelPlacement="end"
                      />
                    </div>
                    <div className="mt-8 flex justify-center">
                         <div onClick={loginHandler} className='bg-emerald-600 hover:bg-emerald-400 duration-300 py-4 px-20 text-2xl font-bold text-black rounded-full cursor-pointer'>Sign Up</div>
                    </div>
               </div>
          </div>
    </ThemeProvider>
  );
}
