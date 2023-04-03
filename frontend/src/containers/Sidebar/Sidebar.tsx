import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import spotifyLogo from '../../assets/images/spotify-logo.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
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
                <NavLink to="/">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon className='text-white' />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to="/search">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SearchIcon className='text-white' />
                            </ListItemIcon>
                            <ListItemText primary="Search" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            </List>

            <List className='text-white'>
                <NavLink to="/liked-songs">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FavoriteRoundedIcon className='text-white' />
                            </ListItemIcon>
                            <ListItemText primary="Liked Songs" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <Divider className='bg-white' />
            </List>
        </div>
    );
}
