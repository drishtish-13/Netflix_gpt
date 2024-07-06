import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies=()=>{const dispatch=useDispatch();
  const upcomingMovies=useSelector(store=>store.movies.upcomingMovies);
  const getUpcoming=async()=>{
    const data= await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json=await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(()=>{
    !upcomingMovies && getUpcoming();
  },[]);
};

export default useUpcomingMovies;