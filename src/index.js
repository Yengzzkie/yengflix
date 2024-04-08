import "./styles.css";
import displayNowPlayingMovies from "./modules/displayNowPlayingMovies.js";
import searchMovie from "./modules/searchMovie.js";
import { options } from "./modules/getNowPlayingMovies.js";
import displayMovies from "./modules/displayMovies.js";
import displaySeries from "./modules/displaySeries.js";

const searchMovieInput = document.getElementById('search-query');
const searchMovieBtn = document.getElementById('search-movie-btn')
const searchSeriesBtn = document.getElementById('search-series-btn')

searchMovieBtn.addEventListener('click', () => {
  if (searchMovieInput.value === '') {
    alert('Please enter movie title')
  } else {
    searchMovie();
  }
})

// *********************************
searchSeriesBtn.addEventListener('click', searchSeries);

async function getTrendingTV() { //fetch now playing movies
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/popular",
      options
      );
      const data = await response.json();
      console.log(data.results);
      return data.results;
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of an error
    }
  }
  
  export default async function displayPopularSeries() {
    try {
      const nowPlayingMovies = await getTrendingTV();
      displayMovies(nowPlayingMovies);
    } catch (error) {
      console.error(error);
    }
  }
  displayPopularSeries();
  
  async function searchSeries() {
    const searchQuery = searchMovieInput.value;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      const searchResults = data.results;
      displaySeries(searchResults);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  displayNowPlayingMovies(); //initilize the list of now playing movies on page load


export { searchMovieInput };

