import "./styles.css";
import displayNowPlayingMovies from "./modules/displayNowPlayingMovies.js";
import searchMovie from "./modules/searchMovie.js";

const searchMovieInput = document.getElementById('search-query');
const searchMovieBtn = document.getElementById('search-btn')

searchMovieBtn.addEventListener('click', () => {
  if (searchMovieInput.value === '') {
    alert('Please enter movie title')
  } else {
    searchMovie();
  }
})

displayNowPlayingMovies(); //initilize the list of now playing movies on page load

export { searchMovieInput };