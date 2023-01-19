import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as React from 'react';

export interface ILikeButtonProps {
    styles?: object,
    className?: string,
}

export default function LikeButton (props: ILikeButtonProps) {
  return (
    <div className={props.className}>
        <IconButton aria-label="favorite" size="large">
            <FavoriteBorderIcon fontSize="inherit" style={props.styles} />
        </IconButton>
    </div>
  );
}
