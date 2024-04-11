import { options } from "./getNowPlayingMovies.js";
import { getCurrentPage } from "./displayCurrentPage.js";

export default async function getPopularSeries() { //fetch now playing movies
  let currentPage = getCurrentPage();

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${currentPage}`,
        options
        );
        const data = await response.json();
        console.log(data);
        return data.results;
      } catch (error) {
        console.error(error);
        return []; // Return an empty array in case of an error
      }
    }