import React, { useEffect, useState } from "react";
import { StarRatingStyled } from "../../pages/movie-details/movie-details.styled";
import { omdbApi } from "../../services/omdbApi";
import {
  CardBottom,
  CardContent,
  CardImg,
  CardTitle,
} from "./movie-card.styled";

export const MovieCard = ({ movie }: any) => {
  const [movieProps, setMovieProps] = useState(movie);

  useEffect(() => {
    omdbApi
      .get("/", {
        params: { i: movie.imdbID, type: "movie" },
      })
      .then((response) => setMovieProps(response.data));
  }, []);

  const rate = Number(movieProps.imdbRating);
  return (
    <CardContent>
      <CardImg src={movie.Poster} />
      <CardBottom>
        <CardTitle to={`/movie-detail/${movie.imdbID}`}>
          {movie.Title}
        </CardTitle>
        <StarRatingStyled name="raiting" starCount={5} value={rate / 2} />
      </CardBottom>
    </CardContent>
  );
};
