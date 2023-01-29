import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import spotifyLogo from '../../assets/images/spotify-logo.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { NavLink } from "react-router-dom";

export interface ISidebarProps {
}

export default function Sidebar(props: ISidebarProps) {
    return (
        <div className='basis-[20%] h-full bg-stone-900'>
            <div className='p-5'>
                <img src={spotifyLogo} alt="Sptoify Logo" width={150} />
            </div>
            <List className='text-white'>
                <ListItem disablePadding>
                    <NavLink to="/">
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon className='text-white' />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink to="/search">
                        <ListItemButton>
                            <ListItemIcon>
                                <SearchIcon className='text-white' />
                            </ListItemIcon>
                            <ListItemText primary="Search" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>

            <List className='text-white'>
                <ListItem disablePadding>
                    <NavLink to="/liked-songs">
                        <ListItemButton>
                            <ListItemIcon>
                                <FavoriteRoundedIcon className='text-white' />
                            </ListItemIcon>
                            <ListItemText primary="Liked Songs" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <Divider className='bg-white' />
            </List>
        </div>
    );
}
