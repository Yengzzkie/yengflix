import watchSeries from './watchSeries.js';

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
        watchBtn.textContent = 'Watch';
        movieImage.src = `${baseImgURL}${movie.poster_path}`;
  
        watchBtn.addEventListener("click", () => {
          app.innerHTML = "";
          watchSeries(movie.name, movie.id);
        });
        
        movieCard.append(movieImage, watchBtn);
        movieContainer.append(movieCard)
        app.append(movieContainer);
      });
      
    } catch (error) {
      console.error(error);
    }
  }