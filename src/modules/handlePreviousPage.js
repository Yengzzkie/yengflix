import { currentPage } from './currentPageModule.js';
import { getNowPlayingMovies } from './getNowPlayingMovies.js';
import displayNowPlayingMovies from './displayNowPlayingMovies.js';

const previousPage = document.getElementById('previous-page-btn');

previousPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    const page = document.getElementById('page');
    page.textContent = `Page ${currentPage} of `;
    app.innerHTML = "";
    getNowPlayingMovies();
    displayNowPlayingMovies();
  }
});

export { previousPage };