import React from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <h2>List of James Bond movies:</h2>
      <MovieList />
    </div>
  );
}

export default App;
