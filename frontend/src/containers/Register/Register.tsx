import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAppDispatch, useAppSelector } from '../../store/reduxhooks';
import { registerAction } from '../../store/slices/authSlice';

const darkTheme = createTheme({
   palette: {
      mode: 'dark',
   },
});

export interface IRegisterProps {
}

export default function Register(props: IRegisterProps) {
   const [email, setEmail] = React.useState<string>('');
   const [username, setUsername] = React.useState<string>('');
   const [password, setPassword] = React.useState<string>('');
   const [first_name, setFirstName] = React.useState<string>('');
   const [last_name, setLastName] = React.useState<string>('');
   const [birth_date, setBirthDate] = React.useState<Date | null>(null);
   const [gender, setGender] = React.useState<string>('');

   const {authInfo} = useAppSelector(state => state.auth)

   const dispatch = useAppDispatch()

   const submitHandler = React.useCallback(() => {
      const birth_date_string = birth_date ? birth_date!.toISOString().split('T')[0] : ''
      dispatch(registerAction({email, username, password, first_name, last_name, birth_date: birth_date_string, gender}))
   }, [email, username, password, first_name, last_name, birth_date, gender, dispatch])

   return (
      <ThemeProvider theme={darkTheme}>
         <div className='flex pt-20 justify-center'>
            <div className='basis-9/12'>
               <div className='text-4xl text-white font-bold mb-10 text-center'>Sign up for free to start listening.</div>
               <div className='mt-5'>
                  <TextField value={email} onChange={e => setEmail(e.target.value)} label="Email?" type="email" fullWidth variant="filled" id="outlined-basic" />
               </div>
               <div className='mt-5'>
                  <TextField value={username} onChange={e => setUsername(e.target.value)} label="Username?" fullWidth variant="filled" id="outlined-basic" />
               </div>
               <div className='mt-5'>
                  <TextField value={password} onChange={e => setPassword(e.target.value)} label="Password?" type="password" fullWidth variant="filled" id="outlined-basic" />
               </div>
               <div className='mt-5'>
                  <TextField value={first_name} onChange={e => setFirstName(e.target.value)} label="First Name?" fullWidth variant="filled" id="outlined-basic" />
               </div>
               <div className='mt-5'>
                  <TextField value={last_name} onChange={e => setLastName(e.target.value)} label="Last Name?" fullWidth variant="filled" id="outlined-basic" />
               </div>
               <div className='mt-5 flex items-center gap-10'>
                  <div className='text-white text-2xl'>Your birth date</div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DatePicker
                        label="Basic example"
                        value={birth_date}
                        onChange={(newDate) => {
                           setBirthDate(newDate);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                  </LocalizationProvider>
               </div>
               <div className="mt-5 text-white">
                  <FormControl>
                     <FormLabel id="demo-row-radio-buttons-group-label"><div className='text-2xl text-white'>Gender</div></FormLabel>
                     <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                     >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                     </RadioGroup>
                  </FormControl>
               </div>
               <div className="mt-5 flex justify-center">
                  <div onClick={submitHandler} className='bg-emerald-600 hover:bg-emerald-400 duration-300 py-4 px-20 text-2xl font-bold text-black rounded-full cursor-pointer'>Sign Up</div>
               </div>
            </div>
         </div>
      </ThemeProvider>
   );
}
