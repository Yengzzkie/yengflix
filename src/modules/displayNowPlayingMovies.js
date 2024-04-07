import { getNowPlayingMovies } from "./getNowPlayingMovies.js";
import displayMovies from "./displayMovies.js";

export default async function displayNowPlayingMovies() {
    try {
      const nowPlayingMovies = await getNowPlayingMovies();
      displayMovies(nowPlayingMovies);
    } catch (error) {
      console.error(error);
    }
  }