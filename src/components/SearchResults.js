import React from "react";
import MovieCard from "./MovieCard";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results?.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default SearchResults;
