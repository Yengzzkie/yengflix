import watchMovie from './watchMovie.js';

// this is the main function in displaying the movies may it be the 
// 'Popular' or 'Searched' movies by user
export default async function displayMovies(movies) {
    try {
      const baseImgURL = "https://image.tmdb.org/t/p/w500/";
  
      // Clear previous content
      app.innerHTML = "";
      const movieContainer = document.createElement('section');
      movieContainer.setAttribute('id', 'movie-container');

      movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        const watchBtn = document.createElement("button");
        const movieImage = document.createElement("img");
        const movieInfo = document.createElement('div')
        const movieOverview = document.createElement('p');

        movieInfo.setAttribute('id', 'movie-info');
        movieInfo.innerHTML = `<h1>${movie.title}</h1>`;
        movieOverview.textContent = `${movie.overview}`;
        movieCard.setAttribute('id', 'movie-card')
        watchBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        movieImage.src = `${baseImgURL}${movie.poster_path}`;
  
        watchBtn.addEventListener("click", () => {
          // app.innerHTML = "";
          watchMovie(movie.title, movie.id);
        });
        
        movieInfo.append(movieOverview);
        movieCard.append(movieImage, watchBtn, movieInfo);
        movieContainer.append(movieCard)
        app.append(movieContainer);
      });
      
    } catch (error) {
      console.error(error);
    }
  }