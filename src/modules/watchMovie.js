import displayNowPlayingMovies from "./displayNowPlayingMovies.js";

export default async function watchMovie(movieTitle, movieID) {
  const titleHeader = document.getElementById("page");
  titleHeader.innerHTML = "";

  try {
    const movieContainer = document.createElement("div");
    const iframe = document.createElement("iframe");
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    iframe.src = `https://2embed.org/embed/movie/${movieID}`;
    iframe.setAttribute("allowfullscreen", "true");

    titleHeader.textContent = movieTitle;
    movieContainer.append(iframe, backBtn);
    app.append(movieContainer);

    backBtn.addEventListener("click", () => {
      app.innerHTML = "";
      displayNowPlayingMovies();
    });
  } catch (error) {
    console.error(error);
  }
}
