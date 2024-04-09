import { options } from "./getNowPlayingMovies.js";

export default async function getPopularSeries() { //fetch now playing movies
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
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