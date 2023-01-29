import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Route, Routes } from 'react-router-dom';
import ProfileDropdown from '../../components/NavbarComponents/ProfileDropdown';
import SearchBar from '../../components/NavbarComponents/SearchBar';
export interface INavbarProps {
}

export default function Navbar (props: INavbarProps) {
  return (
    <div className='fixed top-0 w-[85%] p-4 bg-teal-800/60 flex items-center gap-4 z-20'>
      <div className='ml-10'>
        <ArrowCircleLeftOutlinedIcon className='text-white cursor-pointer hover:text-gray-400 duration-500 mr-4'  fontSize='large' />
        <ArrowCircleRightOutlinedIcon  className='text-white cursor-pointer hover:text-gray-400 duration-500' fontSize='large' />
      </div>
      <div>
        <Routes>
          <Route path="/search/" element={<SearchBar />}></Route>
        </Routes>
      </div>
      <div className='ml-auto mr-10'>
        <ProfileDropdown />
      </div>
    </div>
  );
}
