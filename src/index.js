import "./styles.css";
import displayNowPlayingMovies from "./modules/displayNowPlayingMovies.js";
import displayPopularSeries from "./modules/displayPopularSeries.js";
import searchMovie from "./modules/searchMovie.js";
import searchSeries from "./modules/searchSeries.js";
import { getNowPlayingMovies } from "./modules/getNowPlayingMovies.js";

const searchMovieInput = document.getElementById("search-query");
const searchMovieBtn = document.getElementById("search-movie-btn");
const searchSeriesBtn = document.getElementById("search-series-btn");
const homeBtn = document.getElementById("home-btn");
const tvSeriesBtn = document.getElementById("tv-series-btn");
const hamburger = document.getElementById("hamburger");
const nextPage = document.getElementById("next-page");
const previousPage = document.getElementById("previous-page");
const page = document.getElementById('page')
const app = document.getElementById("app");

let currentPage = 1;
page.textContent = `Page ${currentPage} of `;

// NAVIGATION EVENTLISTENERS
homeBtn.addEventListener("click", () => {
  currentPage = 1; // Reset currentPage to 1
  app.innerHTML = "";
  getNowPlayingMovies();
  displayNowPlayingMovies();
});

tvSeriesBtn.addEventListener("click", displayPopularSeries);
searchSeriesBtn.addEventListener("click", searchSeries); // eventlistener for searching query for TV Series

// HAMBURGER EVENTLISTENER
hamburger.addEventListener("click", () => { // eventlistener for toggling the hamburger menu
  const header = document.querySelector("header");
  header.classList.toggle("active");
});

// PAGE NAVIGATION EVENTLISTENERS
nextPage.addEventListener("click", () => { // eventlistener for MOVIES result next page
  currentPage++;
  page.textContent = `Page ${currentPage} of `;
  app.innerHTML = "";
  getNowPlayingMovies();
  displayNowPlayingMovies();
});

previousPage.addEventListener("click", () => { // eventlistener for MOVIES result previous page
  if (currentPage > 1) {
    // this condition will prevent the currentPage from going below 1
    currentPage--;
    page.textContent = `Page ${currentPage} of `;
    app.innerHTML = "";
    getNowPlayingMovies();
    displayNowPlayingMovies();
  }
});


// SEARCH QUERY EVENTLISTENERS
searchSeriesBtn.addEventListener("click", () => {
  if (searchMovieInput.value === "") {
    alert("Please enter TV show title");
  } else {
    searchSeries();
  }
});


searchMovieBtn.addEventListener("click", () => {
  if (searchMovieInput.value === "") {
    alert("Please enter movie title");
  } else {
    searchMovie();
  }
});

displayNowPlayingMovies(); //initilize the list of now playing movies on page load

export { searchMovieInput, currentPage };
