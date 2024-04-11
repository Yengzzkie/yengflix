// nextPageModule.js

import { getCurrentPage, incrementPage } from './currentPageModule.js';
import { getNowPlayingMovies } from './getNowPlayingMovies.js';
import displayNowPlayingMovies from './displayNowPlayingMovies.js';

const nextPage = document.getElementById('next-page-btn');

nextPage.addEventListener("click", () => {
  incrementPage();
  console.log('test')
  const page = document.getElementById('page');
  page.textContent = `Page ${getCurrentPage()} of `;
  app.innerHTML = "";
  getNowPlayingMovies();
  displayNowPlayingMovies();
});

export { nextPage };
