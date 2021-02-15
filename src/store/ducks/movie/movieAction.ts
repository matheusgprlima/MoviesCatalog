import { omdbApi } from "../../../services/omdbApi";

export const fetchMovies = (searchTitle: string, year: string) => {
  return omdbApi
    .get("/", {
      params: { s: searchTitle, y: year, type: "movie" },
    })
    .then((response) => response.data.Search);
};

export const searchMovies = (searchTitle: string, year: string) => {
  return async (dispatch: any) => {
    const movies = await fetchMovies(searchTitle, year);
    dispatch({ type: "UPDATE_MOVIES", payload: movies });
  };
};
