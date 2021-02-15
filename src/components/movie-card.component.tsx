import React from "react";
import {
  CardBottom,
  CardContent,
  CardImg,
  CardTitle,
} from "../pages/search-movies/search-movies.styled";

export const MovieCard = ({ movie }: any) => {
  return (
    <CardContent>
      <CardImg src={movie.Poster} />
      <CardBottom>
        <CardTitle to={`/movie-detail/${movie.imdbID}`}>
          {movie.Title}
        </CardTitle>
      </CardBottom>
    </CardContent>
  );
};
