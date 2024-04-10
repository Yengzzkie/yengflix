import "./styles.css";
import displayNowPlayingMovies from "./modules/displayNowPlayingMovies.js";
import searchMovie from "./modules/searchMovie.js";
import displayPopularSeries from "./modules/displayPopularSeries.js";
import searchSeries from "./modules/searchSeries.js";

const searchMovieInput = document.getElementById('search-query');
const searchMovieBtn = document.getElementById('search-movie-btn')
const searchSeriesBtn = document.getElementById('search-series-btn')
const homeBtn = document.getElementById('home-btn');
const tvSeriesBtn = document.getElementById('tv-series-btn');
const hamburger = document.getElementById('hamburger');

homeBtn.addEventListener('click', displayNowPlayingMovies)
tvSeriesBtn.addEventListener('click', displayPopularSeries)
searchSeriesBtn.addEventListener('click', searchSeries);

hamburger.addEventListener('click', () => {
  const header = document.querySelector('header');

  header.classList.toggle('active');
})

searchMovieBtn.addEventListener('click', () => {
  if (searchMovieInput.value === '') {
    alert('Please enter movie title')
  } else {
    searchMovie();
  }
})


displayNowPlayingMovies(); //initilize the list of now playing movies on page load


export { searchMovieInput };

