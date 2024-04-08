import getPopularSeries from "./getPopularSeries.js";
import displaySeries from "./displaySeries.js";

export default async function displayPopularSeries() {
    try {
      const nowPlayingMovies = await getPopularSeries();
      displaySeries(nowPlayingMovies);
    } catch (error) {
      console.error(error);
    }
  }