import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies=()=>{
  const dispatch=useDispatch();
  const NowPlayingMovies=useSelector((store)=>store.movies.NowPlayingMovies);
  const getnowplaying=async()=>{
    const data= await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json=await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(()=>{
    !NowPlayingMovies && getnowplaying();
   
  },[]);
};

export default useNowPlayingMovies;