import displayPopularSeries from './displayPopularSeries.js';

export default async function watchMovie(movieTitle, movieID) {
    try {
      const movieContainer = document.createElement("div");
      const iframe = document.createElement("iframe");
      const backBtn = document.createElement("button");
      backBtn.textContent = "Back";
      iframe.src = `https://vidsrc.xyz/embed/tv/${movieID}`;
      iframe.setAttribute("allowfullscreen", "true");
  
      movieContainer.textContent = `Title: ${movieTitle}, ID: ${movieID}`;
      movieContainer.append(backBtn);
      app.append(movieContainer, iframe);
  
      backBtn.addEventListener("click", () => {
        app.innerHTML = "";
        displayPopularSeries(); 
      });

    } catch (error) {
      console.error(error);
    }
  };