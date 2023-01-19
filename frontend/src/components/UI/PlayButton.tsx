import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import classNames from 'classnames';

export interface IPlayButtonProps {
  className?: string,
  color?: string,
}

export default function PlayButton (props: IPlayButtonProps) {
  const colorClassName = props.color || 'text-green-400';
  return (
    <div className={classNames(props.className)}>
      <IconButton aria-label="delete" className='hover:scale-125 duration-500'>
          <PlayCircleFilledRoundedIcon className={colorClassName} style={{fontSize: 50}} />
      </IconButton>
    </div>
  );
}
