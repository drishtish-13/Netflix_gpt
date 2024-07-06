import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopularMovies from '../hooks/usePopularMovie';
import useTopRatedMovies from '../hooks/useTopRatedmovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
const showGptSearch=useSelector(store=>store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      {showGptSearch?(
        <GptSearch/>):(
      <>
      <MainContainer/>
      <SecondryContainer/>
      </>
)}
      
    </div>
  );
};

export default Browse;