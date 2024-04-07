import "./styles.css";

const app = document.getElementById("app");
const searchMovieInput = document.getElementById('search-query');
const searchMovieBtn = document.getElementById('search-btn')
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTkwMGIwZmVhZjZjZjVkMjk0MDc1YjAxNDRkMmZiYSIsInN1YiI6IjY2MTA4NDQ1NWIzNzBkMDE3MDYzMzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r2V8Oru9xaAu4JLQPZw_nqv_lVULwa-ZPfq8ruQHwvg",
  },
};

searchMovieBtn.addEventListener('click', () => {
  if (searchMovieInput.value === '') {
    alert('Please enter movie title')
  } else {
    searchMovie();
  }

  
})

async function getNowPlayingMovies() { //fetch now playing movies
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
}

async function displayNowPlayingMovies() {
  try {
    const nowPlayingMovies = await getNowPlayingMovies();
    displayMovies(nowPlayingMovies);
  } catch (error) {
    console.error(error);
  }
}

displayNowPlayingMovies(); //initilize the list of now playing movies on page load

async function searchMovie() {
  const searchQuery = searchMovieInput.value;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    const searchResults = data.results;
    displayMovies(searchResults);
  } catch (error) {
    console.error(error);
  }
}

async function watchMovie(movieTitle, movieID) {
  try {
    const movieContainer = document.createElement("div");
    const iframe = document.createElement("iframe");
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    iframe.src = `https://2embed.org/embed/movie/${movieID}`;
    iframe.width = "800px";
    iframe.height = "450px";
    iframe.setAttribute("allowfullscreen", "true");

    movieContainer.textContent = `Title: ${movieTitle}, ID: ${movieID}`;
    movieContainer.append(backBtn);
    app.append(movieContainer, iframe);

    backBtn.addEventListener("click", () => {
      app.innerHTML = "";
      displayNowPlayingMovies();
    });
  } catch (error) {
    console.error(error);
  }
}

async function displayMovies(movies) {
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