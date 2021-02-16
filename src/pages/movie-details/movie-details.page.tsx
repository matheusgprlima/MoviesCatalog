import { useEffect, useState } from "react";
import { omdbApi } from "../../services/omdbApi";
import {
  CardPoster,
  Container,
  ContainerBlur,
  InfoContainer,
  ContentContainer,
  MovieTitle,
  DetailsParagraph,
  StarRatingStyled,
} from "./movie-details.styled";

export function DetailMovies({ movie }: any) {
  const [movieProps, setMovieProps] = useState(movie);

  useEffect(() => {
    omdbApi
      .get("/", {
        params: { i: movie.imdbID, type: "movie" },
      })
      .then((response) => setMovieProps(response.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rating = Number(movieProps.imdbRating);
  return (
    <Container background={movieProps.Poster}>
      <ContainerBlur>
        <InfoContainer>
          <CardPoster src={movieProps.Poster} />
          <ContentContainer>
            <MovieTitle>{movieProps.Title}</MovieTitle>
            <StarRatingStyled name="raiting" starCount={5} value={rating / 2} />
            <DetailsParagraph>{movieProps.Plot}</DetailsParagraph>
          </ContentContainer>
        </InfoContainer>
      </ContainerBlur>
    </Container>
  );
}
