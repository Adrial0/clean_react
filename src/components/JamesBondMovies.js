// JamesBondMovies.js

import React, { useState, useEffect } from "react";

const JamesBondMovies = () => {
  // Replace YOUR_API_KEY with your actual API key from OMDB
  const API_KEY = "ccdaa53a";
  const OMDB_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Construct the URL with the correct search parameters
    const searchParams = new URLSearchParams({
      s: "James Bond",
      type: "movie",
      plot: "short",
      r: "json",
      page: "1",
    });

    const apiUrl = `${OMDB_URL}&${searchParams}`;

    // Make the HTTP request using the fetch function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract the list of movies from the response data
        const movies = data.Search;
        // Extract the titles of the first 10 movies
        const movieTitles = movies.slice(0, 10).map((movie) => movie.Title);
        setMovies(movieTitles);
      })
      .catch((error) => {
        console.error("Error fetching James Bond movies:", error);
      });
  }, []);

  return (
    <div>
      <h2>James Bond Movies</h2>
      <ul>
        {movies.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JamesBondMovies;
