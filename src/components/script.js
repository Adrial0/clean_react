// Replace YOUR_API_KEY with your actual API key from OMDB
const API_KEY = "ccdaa53a";
const OMDB_URL = `https://www.omdbapi.com/?apikey=${API_KEY}${slug}`;


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
    console.log(movieTitles);
    // Display the list of movies on your website
  })
  .catch((error) => {
    console.error("Error fetching James Bond movies:", error);
  });
