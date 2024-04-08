import { getNowPlayingMovies } from "./getNowPlayingMovies.js";
import displayMovies from "./displayMovies.js";

// this will display the current popular movies on page load and is set as
// default landing page
export default async function displayNowPlayingMovies() {
  try {
    const nowPlayingMovies = await getNowPlayingMovies();
    displayMovies(nowPlayingMovies);
  } catch (error) {
    console.error(error);
  }
}
