import displayNowPlayingMovies from "./displayNowPlayingMovies.js";

export default async function watchMovie(movieTitle, movieID, posterPath) {
  const titleHeader = document.getElementById("page");
  titleHeader.innerHTML = "";
  const baseImgURL = "https://image.tmdb.org/t/p/original/";
  let server = 'https://vidsrc.xyz/embed/movie/';

  try {
    const iframeContainer = document.createElement("div");
    const iframe = document.createElement("iframe");
    const backBtn = document.createElement("button");
    const poster = document.createElement('img');
    const serverWrapper = document.createElement('div');
    const server1 = document.createElement('button');
    const server2 = document.createElement('button');

    server1.textContent = 'Server 1';
    server1.className = 'server1';
    server2.textContent = 'Server 2';
    server2.className = 'server2';
    serverWrapper.className = 'server-wrapper';
    poster.src = `${baseImgURL}${posterPath}`;
    poster.setAttribute('id', 'poster')
    iframeContainer.setAttribute('id', 'iframe-container')
    backBtn.innerHTML = '<i class="fa-solid fa-left-long"></i>';
    iframe.src = `${server}${movieID}`;
    iframe.setAttribute("allowfullscreen", "true");

    titleHeader.textContent = movieTitle;
    serverWrapper.append(backBtn, server1, server2);
    iframeContainer.append(iframe, poster, serverWrapper);
    app.append(iframeContainer);

    server1.addEventListener('click', () => {
      server = 'https://vidsrc.xyz/embed/movie/';
      iframe.src = `${server}${movieID}`;
    })

    server2.addEventListener('click', () => {
      server = 'https://2embed.org/embed/movie/';
      iframe.src = `${server}${movieID}`;
    });

    backBtn.addEventListener("click", () => {
      app.innerHTML = "";
      displayNowPlayingMovies();
    });
  } catch (error) {
    console.error(error);
  }
}
