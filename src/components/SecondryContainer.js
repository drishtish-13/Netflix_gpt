import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className='bg-black '>
      <div className='-mt-0 md:-mt-60 pl-4 md:pl-12 relative z-20'>
      <MovieList title ={"Now Playing"} movies={movies.NowPlayingMovies}/>
      <MovieList title ={"Top Rated"} movies={movies.topratedMovies}/>
      <MovieList title ={"Popular"} movies={movies.popularMovies}/>
      <MovieList title ={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title ={"Horror"} movies={movies.NowPlayingMovies}/>
      </div>
    </div>
  )
};

export default SecondryContainer;