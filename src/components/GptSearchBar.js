import React, { useRef } from 'react';
import lang from '../utils/languageConst';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlics';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (!searchText.current) {
      return;
    }

    console.log(searchText.current.value);
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value + ". Only give me the names of 5 movies, comma separated like the example result given ahead. Example: Gadar, Golmal, Koi mil Gya, Heropanti, Raaz, Sholay";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (!gptResult.choices) return null;
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    const datatmdb = gptMovies.map((movie) => searchMovie(movie));
    const tmdbResult=await Promise.all(datatmdb);
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResult: tmdbResult }));
  };

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text'  className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].Search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
