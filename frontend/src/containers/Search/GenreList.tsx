import * as React from 'react';
import { GenreSummriesType } from '../../types';
import { useNavigate } from 'react-router-dom';

export interface IGenreListProps {
  genres: GenreSummriesType;
}

export default function GenreList(props: IGenreListProps) {
  const navigate = useNavigate();
  return (
    <div>
      <div className='text-7xl text-white font-bold mb-5'>Genres</div>
      <div className='flex gap-6 flex-wrap'>
        {props.genres.map((genre) => {
          return (
            <div className='w-60 h-60 rounded-xl p-4 cursor-pointer hover:opacity-70 duration-500'
              style={{ backgroundColor: genre.color }} key={genre.id}
              onClick={() => {navigate(`/genres/${genre.id}`)}}
              >
              <div className='text-5xl font-bold text-white'>{genre.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
