import watchMovie from './watchMovie.js';

export default async function displayMovies(movies) {
    try {
      const baseImgURL = "https://image.tmdb.org/t/p/w500/";
  
      // Clear previous content
      app.innerHTML = "";
  
      movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        const movieID = document.createElement("button");
        const movieImage = document.createElement("img");
        movieID.textContent = movie.title;
        movieImage.src = `${baseImgURL}${movie.poster_path}`;
  
        movieID.addEventListener("click", () => {
          app.innerHTML = "";
          watchMovie(movie.title, movie.id);
        });
  
        movieCard.append(movieImage, movieID);
        app.append(movieCard);
      });
    } catch (error) {
      console.error(error);
    }
  }