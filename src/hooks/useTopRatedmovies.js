import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies=()=>{const dispatch=useDispatch();
  const topratedMovies=useSelector(store=>store.movies.topratedMovies);
  const getTopRated=async()=>{
    const data= await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json=await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(()=>{
    !topratedMovies&&getTopRated();
  },[]);
};

export default useTopRatedMovies;