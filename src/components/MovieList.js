import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return <div>No movies available</div>;
  }

  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide">
        
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path}  className="inline-block w-48 mr-2"/>
          ))}
        </div>
      </div>
      <style jsx>{`
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`}</style>
    </div>
  );
};

export default MovieList;
