import watchMovie from "./watchMovie.js";
import watchSeries from "./watchSeries.js";

export default function addToMyList({ movie, title, type }) {
  // Retrieve existing list from local storage or initialize an empty array
  const myList = JSON.parse(localStorage.getItem("myList")) || [];

  // Check if movieId is already in the list
  if (!myList.includes(movie)) {
    // If not, add it to the list
    myList.push({
      title: title,
      id: movie.id,
      overview: movie.overview,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      poster: movie.poster_path,
      type: type,
    });

    // Save the updated list back to local storage
    localStorage.setItem("myList", JSON.stringify(myList));

    alert("Movie added to your list!");
  } else {
    alert("This movie is already in your list!");
  }
}

async function displayMyList() {
  try {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    const baseImgURL = "https://image.tmdb.org/t/p/w500/";

    app.innerHTML = "";
    const movieContainer = document.createElement("section");
    movieContainer.setAttribute("id", "movie-container");

    if (myList.length === 0) {
      const emptyText = document.createElement('h1');
      emptyText.innerHTML = 'Your list is empty <i class="fa-solid fa-broom"></i>';
      app.append(emptyText)
    }
  

    console.log(myList)

    myList.forEach((movie, index) => {
      const movieCard = document.createElement("div");
      const btnWrapper = document.createElement("div");
      const watchBtn = document.createElement("button");
      const deleteFromListBtn = document.createElement("button");
      const movieImage = document.createElement("img");
      const movieInfo = document.createElement("div");
      const movieOverview = document.createElement("p");
      const movieReleaseDate = document.createElement("p");
      const movieRating = document.createElement("p");

      movieInfo.setAttribute("id", "movie-info");
      movieInfo.innerHTML = `<h1>${movie.title}</h1>`;
      movieOverview.textContent = `${movie.overview}`;
      movieRating.innerHTML = `<b>Rating</b> : ${Math.floor(
        movie.vote_average
      )} / 10`;
      movieReleaseDate.innerHTML = `<b>Released</b> : ${movie.release_date}`;
      movieImage.src = `${baseImgURL}${movie.poster}`;
      movieCard.setAttribute("id", "movie-card");
      btnWrapper.setAttribute('id', 'button-wrapper');
      watchBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
      watchBtn.setAttribute("id", "watch-button");
      deleteFromListBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
      deleteFromListBtn.setAttribute("id", "delete-from-list");
    

      watchBtn.addEventListener('click', () => {
        app.innerHTML = '';
        movie.type === 'movie' ? watchMovie(movie.title, movie.id, movie.backdrop_path) : watchSeries(movie.name, movie.id, movie.backdrop_path);
      })

      deleteFromListBtn.addEventListener("click", () => {
        deleteFromMyList(index);
    });
    

      movieInfo.append(movieOverview, movieReleaseDate, movieRating);
      btnWrapper.append(watchBtn, deleteFromListBtn);
      movieCard.append(movieImage, movieInfo, btnWrapper);
      movieContainer.append(movieCard);
      app.append(movieContainer);
    });
  } catch (error) {
    console.error(error);
  }
}

displayMyList();



function deleteFromMyList(index) {
  const myList = JSON.parse(localStorage.getItem("myList")) || [];

  myList.splice(index, 1);

  localStorage.setItem('myList', JSON.stringify(myList)); // Corrected: Passing myList instead of 'myList'
  displayMyList();

}


export { addToMyList, displayMyList };