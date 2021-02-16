import { fetchMovies } from "../../../services/omdbApi";

export const searchMovies = (searchTitle: string, year: string) => {
  return async (dispatch: any) => {
    const movies = await fetchMovies(searchTitle, year);
    dispatch({ type: "UPDATE_MOVIES", payload: movies });
  };
};
