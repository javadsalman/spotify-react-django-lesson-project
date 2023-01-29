import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as React from 'react';


export interface ILikeButtonProps {
    styles?: object,
    className?: string,
    liked?: boolean,
    onClick?: (e?: React.MouseEvent) => void,
}

export default function LikeButton (props: ILikeButtonProps) {
  return (
    <div className={props.className}>
        <IconButton aria-label="favorite" size="large" onClick={props.onClick}>
            {props.liked
            ?
              <FavoriteIcon fontSize="inherit" style={props.styles} />
            :
              <FavoriteBorderIcon fontSize="inherit" style={props.styles} />
            }
        </IconButton>
    </div>
  );
}
