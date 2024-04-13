import './styles.css';
import displayNowPlayingMovies from './modules/displayNowPlayingMovies.js';
import displayPopularSeries from './modules/displayPopularSeries.js';
import searchMovie from './modules/searchMovie.js';
import searchSeries from './modules/searchSeries.js';
import { getNowPlayingMovies } from './modules/getNowPlayingMovies.js';
import { resetCurrentPage } from './modules/displayCurrentPage.js';
import displayMyList from './modules/displayMyList.js';

const searchMovieInput = document.getElementById('search-query');
const searchMovieBtn = document.getElementById('search-movie-btn');
const searchSeriesBtn = document.getElementById('search-series-btn');
const homeBtn = document.getElementById('home-btn');
const tvSeriesBtn = document.getElementById('tv-series-btn');
const myListBtn = document.getElementById('my-list');
const nowPlayingMoviesBtn = document.getElementById('popular-movies-btn');
const hamburger = document.getElementById('hamburger');
const app = document.getElementById('app');

// NAVIGATION EVENTLISTENERS
homeBtn.addEventListener('click', () => {
  resetCurrentPage();
  app.innerHTML = '';
  getNowPlayingMovies();
  displayNowPlayingMovies();
});

nowPlayingMoviesBtn.addEventListener('click', displayNowPlayingMovies);
tvSeriesBtn.addEventListener('click', displayPopularSeries);
myListBtn.addEventListener('click', displayMyList);
searchSeriesBtn.addEventListener('click', searchSeries); // eventlistener for searching query for TV Series

// HAMBURGER EVENTLISTENER
hamburger.addEventListener('click', () => { // eventlistener for toggling the hamburger menu
  const header = document.querySelector('header');
  header.classList.toggle('active');
});

// SEARCH QUERY EVENTLISTENERS
searchSeriesBtn.addEventListener('click', () => {
  if (searchMovieInput.value === '') {
    alert('Please enter TV show title');
  } else {
    searchSeries();
  }
});

searchMovieBtn.addEventListener('click', () => {
  if (searchMovieInput.value === '') {
    alert('Please enter movie title');
  } else {
    searchMovie();
  }
});

displayNowPlayingMovies(); // initilize the list of now playing movies on page load

export { searchMovieInput };
