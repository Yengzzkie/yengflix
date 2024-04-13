import watchMovie from './watchMovie.js';
import displayNowPlayingMovies from './displayNowPlayingMovies.js';
import { incrementPage, decrementPage } from './displayCurrentPage.js';
import addToMyList from './addToMyList.js';

// this is the main function in displaying the movies may it be the
// 'Popular' or 'Searched' movies by user
export default async function displayMovies(movies) {
  try {
    const baseImgURL = 'https://image.tmdb.org/t/p/w500/';

    // Clear previous content
    app.innerHTML = '';
    const movieContainer = document.createElement('section');
    const previousPageBtn = document.createElement('button');
    const nextPageBtn = document.createElement('button');

    movieContainer.setAttribute('id', 'movie-container');
    previousPageBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    nextPageBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    previousPageBtn.setAttribute('id', 'previous-page-btn');
    nextPageBtn.setAttribute('id', 'next-page-btn');

    nextPageBtn.addEventListener('click', () => {
      incrementPage();
      displayNowPlayingMovies();
    });

    previousPageBtn.addEventListener('click', () => {
      decrementPage();
      displayNowPlayingMovies();
    });

    movies.forEach((movie) => {
      const movieCard = document.createElement('div');
      const btnWrapper = document.createElement('div');
      const watchBtn = document.createElement('button');
      const addToListBtn = document.createElement('button');
      const movieImage = document.createElement('img');
      const movieInfo = document.createElement('div');
      const movieOverview = document.createElement('p');
      const movieReleaseDate = document.createElement('p');
      const movieRating = document.createElement('p');

      movieInfo.setAttribute('id', 'movie-info');
      movieInfo.innerHTML = `<h1>${movie.title}</h1>`;
      movieOverview.textContent = `${movie.overview}`;
      movieRating.innerHTML = `<b>Rating</b> : ${Math.floor(movie.vote_average)} / 10`;
      movieReleaseDate.innerHTML = `<b>Released</b> : ${movie.release_date}`;
      movieImage.src = `${baseImgURL}${movie.poster_path}`;
      movieCard.setAttribute('id', 'movie-card');
      btnWrapper.setAttribute('id', 'button-wrapper');
      watchBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      watchBtn.setAttribute('id', 'watch-button');
      addToListBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
      addToListBtn.setAttribute('id', 'add-to-list-button');

      watchBtn.addEventListener('click', () => {
        app.innerHTML = '';
        watchMovie(movie.title, movie.id, movie.backdrop_path);
      });

      addToListBtn.addEventListener('click', () => {
        const title = movie.title ? movie.title : movie.name; // checks if the element is a "movie" or "tv"
        addToMyList({ movie, title, type: 'movie' });
      });

      movieInfo.append(movieOverview, movieReleaseDate, movieRating);
      btnWrapper.append(watchBtn, addToListBtn);
      movieCard.append(movieImage, btnWrapper, movieInfo);
      movieContainer.append(movieCard, nextPageBtn, previousPageBtn);
      app.append(movieContainer);
    });
  } catch (error) {
    console.error(error);
  }
}
