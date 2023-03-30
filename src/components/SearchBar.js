import React, { Component } from "react";
import SearchResults from "./SearchResults";

class SearchBar extends Component {
  state = {
    searchQuery: "",
    showResults: false,
    searchResults: [],
  };

  handleInputChange = (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
    if (searchQuery.length > 2) {
      fetch(
        `https://www.omdbapi.com/?s=${searchQuery}&apikey=ccdaa53a`
      )
        .then((response) => response.json())
        .then((data) => this.setState({ searchResults: data.Search }))
        .then(() => this.setState({ showResults: true }));
    } else {
      this.setState({ showResults: false });
    }
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
          placeholder="Search for movies..."
        />
        {this.state.showResults && (
          <SearchResults results={this.state.searchResults} />
        )}
      </div>
    );
  }
}

export default SearchBar;
