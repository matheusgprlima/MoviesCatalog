import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { omdbApi } from "../../../services/omdbApi";
import { MovieState } from "../../../type";

const initialMovieState: MovieState = { movie: [] };
export const fetchMovies = createAsyncThunk(
  "movies/search",
  (searchTitle, year) => {
    omdbApi
      .get("/", {
        params: { s: searchTitle, y: year, type: "movie" },
      })
      .then((response) => response.data);
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: initialMovieState,
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled.type]: (state, { payload }) => {
      state.movie = payload;
    },
  },
});
export default movieSlice.reducer;
