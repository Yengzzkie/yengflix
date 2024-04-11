import displayPopularSeries from './displayPopularSeries.js';

export default async function watchSeries(movieTitle, movieID) {
  const titleHeader = document.getElementById('page');
  titleHeader.innerHTML = '';

    try {
      const movieContainer = document.createElement("div");
      const iframe = document.createElement("iframe");
      const backBtn = document.createElement("button");

      backBtn.textContent = "Back";
      iframe.src = `https://vidsrc.xyz/embed/tv/${movieID}`;
      iframe.setAttribute("allowfullscreen", "true");

      titleHeader.textContent = movieTitle;
      movieContainer.append(iframe, backBtn);
      app.append(movieContainer);
  
      backBtn.addEventListener("click", () => {
        app.innerHTML = "";
        displayPopularSeries(); 
      });

    } catch (error) {
      console.error(error);
    }
  };