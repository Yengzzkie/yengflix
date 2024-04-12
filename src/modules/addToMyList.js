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
    const myList = JSON.parse(localStorage.getItem("myList"));
    const baseImgURL = "https://image.tmdb.org/t/p/w500/";

    app.innerHTML = "";
    const movieContainer = document.createElement('section');
    movieContainer.setAttribute('id', 'movie-container');

    myList.forEach((list) => {
      const movieCard = document.createElement("div");
      const watchBtn = document.createElement("button");
      const deleteFromListBtn = document.createElement('button');
      const movieImage = document.createElement("img");
      const movieInfo = document.createElement("div");
      const movieOverview = document.createElement("p");
      const movieReleaseDate = document.createElement("p");
      const movieRating = document.createElement("p");

      movieInfo.setAttribute("id", "movie-info");
      movieInfo.innerHTML = `<h1>${list.title}</h1>`;
      movieOverview.textContent = `${list.overview}`;
      movieRating.innerHTML = `<b>Rating</b> : ${Math.floor(list.vote_average)} / 10`;
      movieReleaseDate.innerHTML = `<b>Released</b> : ${list.release_date}`;
      movieImage.src = `${baseImgURL}${list.poster}`;
      movieCard.setAttribute("id", "movie-card");
      watchBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
      watchBtn.setAttribute("id", "watch-button");
      deleteFromListBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
      deleteFromListBtn.setAttribute("id", "delete-from-list");
      console.log(list);

      movieInfo.append(movieOverview, movieReleaseDate, movieRating);
      movieCard.append(movieImage, watchBtn, deleteFromListBtn, movieInfo);
      movieContainer.append(movieCard);
      app.append(movieContainer);
    });
  } catch (error) {
    console.error(error);
  }
}

displayMyList();

export { addToMyList, displayMyList };
