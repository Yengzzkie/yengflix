import { searchMovieInput } from '../index.js';
import { options } from "./getNowPlayingMovies.js";
import displaySeries from './displaySeries.js';

export default async function searchSeries() {
    const searchQuery = searchMovieInput.value;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      const searchResults = data.results;
      console.log(searchResults)
      displaySeries(searchResults);
    } catch (error) {
      console.error(error);
    }
  }