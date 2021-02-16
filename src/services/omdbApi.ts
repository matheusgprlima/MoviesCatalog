import axios from "axios";
export const omdbApi = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: { apikey: process.env.REACT_APP_API_KEY },
});

export const fetchMovies = (searchTitle: string, year: string) => {
  return omdbApi
    .get("/", {
      params: { s: searchTitle, y: year, type: "movie" },
    })
    .then((response) => response.data.Search);
};
export const fetchMoviesById = (id: string) => {
  return omdbApi
    .get("/", {
      params: { i: id, type: "movie" },
    })
    .then((response) => response.data);
};
