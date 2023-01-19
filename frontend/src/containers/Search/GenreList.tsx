import * as React from 'react';

export interface IGenreListProps {
}

export default function GenreList (props: IGenreListProps) {
  return (
    <div>
      <div className='text-7xl text-white font-bold mb-5'>Genres</div>
      <div className='flex gap-6 flex-wrap'>
        <div className='w-60 h-60 bg-red-500 rounded-xl p-4 cursor-pointer'>
            <div className='text-5xl font-bold text-white'>Podcast</div>
        </div>
        <div className='w-60 h-60 bg-red-500 rounded-xl p-4 cursor-pointer'>
            <div className='text-5xl font-bold text-white'>Podcast</div>
        </div>
        <div className='w-60 h-60 bg-red-500 rounded-xl p-4 cursor-pointer'>
            <div className='text-5xl font-bold text-white'>Podcast</div>
        </div>
        <div className='w-60 h-60 bg-red-500 rounded-xl p-4 cursor-pointer'>
            <div className='text-5xl font-bold text-white'>Podcast</div>
        </div>
        <div className='w-60 h-60 bg-red-500 rounded-xl p-4 cursor-pointer'>
            <div className='text-5xl font-bold text-white'>Podcast</div>
        </div>
        <div className='w-60 h-60 bg-red-500 rounded-xl p-4 cursor-pointer'>
            <div className='text-5xl font-bold text-white'>Podcast</div>
        </div>
      </div>
    </div>
  );
}
