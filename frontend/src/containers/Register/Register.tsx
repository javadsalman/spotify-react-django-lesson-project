import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export interface IRegisterProps {
}

export default function Register (props: IRegisterProps) {
  return (
     <ThemeProvider theme={darkTheme}>
          <div className='flex pt-20 justify-center'>
               <div className='basis-9/12'>
                    <div className='text-4xl text-white font-bold mb-10 text-center'>Sign up for free to start listening.</div>
                    <div className='mt-5'>
                         <TextField label="What is your email?" fullWidth  variant="filled" id="outlined-basic"/>
                    </div>
                    <div className='mt-5'>
                         <TextField label="What is your username?" fullWidth  variant="filled" id="outlined-basic"/>
                    </div>
                    <div className='mt-5'>
                         <TextField label="What is your password?" fullWidth  variant="filled" id="outlined-basic"/>
                    </div>
                    <div className='mt-5'>
                         <TextField label="What is your First Name?" fullWidth  variant="filled" id="outlined-basic"/>
                    </div>
                    <div className='mt-5'>
                         <TextField label="What is your Last Name?" fullWidth  variant="filled" id="outlined-basic"/>
                    </div>
                    <div className='mt-5 flex items-center gap-10'>
                         <div className='text-white text-2xl'>Your birth date</div>
                         <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                              label="Basic example"
                              value={new Date()}
                              onChange={() => {
                                   
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
                              >
                                   <FormControlLabel value="female" control={<Radio />} label="Female" />
                                   <FormControlLabel value="male" control={<Radio />} label="Male" />
                                   <FormControlLabel value="other" control={<Radio />} label="Other" />
                              </RadioGroup>
                         </FormControl>
                    </div>
                    <div className="mt-5 flex justify-center">
                         <div className='bg-emerald-600 hover:bg-emerald-400 duration-300 py-4 px-20 text-2xl font-bold text-black rounded-full cursor-pointer'>Sign Up</div>
                    </div>
               </div>
          </div>
    </ThemeProvider>
  );
}
