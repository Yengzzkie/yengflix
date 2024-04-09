import displayNowPlayingMovies from './displayNowPlayingMovies.js';

export default async function watchMovie(movieTitle, movieID) {
    const modal = document.getElementById('modal');
    modal.showModal();

    try {
      const movieContainer = document.createElement("div");
      const iframe = document.createElement("iframe");
      const backBtn = document.createElement("button");
      backBtn.textContent = "Back";
      iframe.src = `https://2embed.org/embed/movie/${movieID}`;
      iframe.setAttribute("allowfullscreen", "true");
  
      movieContainer.textContent = `Title: ${movieTitle}, ID: ${movieID}`;
      movieContainer.append(backBtn);
      modal.append(movieContainer, iframe);
  
      backBtn.addEventListener("click", () => {
        app.innerHTML = "";
        displayNowPlayingMovies();
      });
    } catch (error) {
      console.error(error);
    }
  }