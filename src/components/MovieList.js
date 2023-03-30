import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await fetch(
      "https://www.omdbapi.com/?s=james+bond&apikey=ccdaa53a"
    );
    const data = await response.json();
    this.setState({ movies: data.Search });
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    );
  }
}

export default MovieList;
