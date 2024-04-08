import { options } from "./getNowPlayingMovies";
import { searchMovieInput } from "../index.js";
import displayMovies from "./displayMovies.js";

export default async function searchMovie() {
    const searchQuery = searchMovieInput.value;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      const searchResults = data.results;
      console.log(searchResults)
      displayMovies(searchResults);
    } catch (error) {
      console.error(error);
    }
  }