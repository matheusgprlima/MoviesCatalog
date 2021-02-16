import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { omdbApi } from "../../services/omdbApi";
import {
  CardPoster,
  Container,
  ContainerBlur,
  InfoContainer,
  ContentContainer,
  ImbdRating,
  FailCover,
  MovieTitle,
  DetailsParagraph,
  StarRatingStyled,
  ImbdContainer,
} from "./movie-details.styled";

export function DetailMovies({ movie }: any) {
  const [movieProps, setMovieProps] = useState(movie);
  let { id }: any = useParams();
  useEffect(() => {
    omdbApi
      .get("/", {
        params: { i: id, type: "movie" },
      })
      .then((response) => setMovieProps(response.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rating = movieProps !== undefined ? Number(movieProps.imdbRating) : 0;
  return movieProps ? (
    <Container background={movieProps.Poster}>
      <ContainerBlur>
        <InfoContainer>
          <CardPoster src={movieProps.Poster} />
          <ContentContainer>
            <MovieTitle>{movieProps.Title}</MovieTitle>
            <DetailsParagraph>{movieProps.Runtime}</DetailsParagraph>
            <ImbdContainer>
              <StarRatingStyled
                name="raiting"
                starCount={5}
                value={rating / 2}
              />
              <ImbdRating>{movieProps.imdbRating}</ImbdRating>
            </ImbdContainer>
            <DetailsParagraph>{movieProps.Plot}</DetailsParagraph>
          </ContentContainer>
        </InfoContainer>
      </ContainerBlur>
    </Container>
  ) : (
    <FailCover></FailCover>
  );
}
