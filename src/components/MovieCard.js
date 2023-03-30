import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-result">
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
