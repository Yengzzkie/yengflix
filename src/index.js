import './styles.css';
import displayNowPlayingMovies from './modules/displayNowPlayingMovies.js';
import displayPopularSeries from './modules/displayPopularSeries.js';
import searchMovie from './modules/searchMovie.js';
import searchSeries from './modules/searchSeries.js';
import { getNowPlayingMovies } from './modules/getNowPlayingMovies.js';
import { resetCurrentPage } from './modules/displayCurrentPage.js';
import displayMyList from './modules/displayMyList.js';
import intro from './modules/intro.js';

const searchMovieInput = document.getElementById('search-query');
const searchMovieBtn = document.getElementById('search-movie-btn');
const searchSeriesBtn = document.getElementById('search-series-btn');
const homeBtn = document.getElementById('home-btn');
const tvSeriesBtn = document.getElementById('tv-series-btn');
const myListBtn = document.getElementById('my-list');
const nowPlayingMoviesBtn = document.getElementById('popular-movies-btn');
const hamburger = document.getElementById('hamburger');
const search = document.getElementById('search');
const header = document.querySelector('header');
const clearField = document.getElementById('clear-field');
const logo = document.getElementById('mobile-logo')
const app = document.getElementById('app');

// NAVIGATION EVENTLISTENERS
homeBtn.addEventListener('click', () => {
  resetCurrentPage();
  app.innerHTML = '';
  getNowPlayingMovies();
  displayNowPlayingMovies();
});

logo.addEventListener('click', () => {
  resetCurrentPage();
  app.innerHTML = '';
  getNowPlayingMovies();
  displayNowPlayingMovies();
})

nowPlayingMoviesBtn.addEventListener('click', displayNowPlayingMovies);
tvSeriesBtn.addEventListener('click', displayPopularSeries);
myListBtn.addEventListener('click', displayMyList);
searchSeriesBtn.addEventListener('click', searchSeries); // eventlistener for searching query for TV Series

// HAMBURGER EVENTLISTENER
search.addEventListener('click', () => { // eventlistener for toggling the hamburger menu
  header.classList.toggle('active');
});

// SEARCH QUERY EVENTLISTENERS
searchSeriesBtn.addEventListener('click', () => {
  if (searchMovieInput.value === '') {
    alert('Please enter TV show title');
  } else {
    searchSeries();
    header.classList.toggle('active')
  }
});

searchMovieBtn.addEventListener('click', () => {
  if (searchMovieInput.value === '') {
    alert('Please enter movie title');
  } else {
    searchMovie();
    header.classList.toggle('active')
  }
});

clearField.addEventListener('click', (e) => {
  searchMovieInput.value = '';
  e.preventDefault();
})

intro();
displayNowPlayingMovies(); // initilize the list of now playing movies on page load

export { searchMovieInput };
