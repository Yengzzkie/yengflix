import displayPopularSeries from './displayPopularSeries.js';

export default async function watchMovie(movieTitle, movieID) {
  const modal = document.getElementById('modal');
  modal.innerHTML = '';
  modal.showModal();

  try {
    const movieContainer = document.createElement("div");
    const iframe = document.createElement("iframe");
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    iframe.src = `https://vidsrc.xyz/embed/tv/${movieID}`;
    iframe.setAttribute("allowfullscreen", "true");

    movieContainer.textContent = `Title: ${movieTitle}, ID: ${movieID}`;
    movieContainer.append(backBtn);
    modal.append(movieContainer, iframe);

    backBtn.addEventListener("click", () => {
      modal.close();
    });
  } catch (error) {
    console.error(error);
  }
}