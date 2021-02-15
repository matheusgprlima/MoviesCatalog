import { omdbApi } from "../../../services/omdbApi";

export const fetchMovies = (searchTitle: string, year: string) => {
  omdbApi
    .get("/", {
      params: { s: searchTitle, y: year, type: "movie" },
    })
    .then((response) => response.data);
};

export const searchMovies = (searchTitle: string, year: string) => {
  const request = fetchMovies(searchTitle, year);
  return { type: "SEARCH_MOVIES", payload: request };
};
