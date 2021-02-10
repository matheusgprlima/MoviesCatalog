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
import data from "../search-movies/data.json";

export function DetailMovies({ title, year }: any) {
  const dataInfo = data.find(
    (value) => value.Title === title && value.Year === year
  );
  const img = data[0].Poster;
  const rating = Number(data[0].imdbRating);
  return (
    <Container background={img}>
      <ContainerBlur>
        <InfoContainer>
          <CardPoster src={img} />
          <ContentContainer>
            <MovieTitle>{data[0].Title}</MovieTitle>
            <StarRatingStyled name="raiting" starCount={5} value={rating / 2} />
            <DetailsParagraph>{data[0].Plot}</DetailsParagraph>
          </ContentContainer>
        </InfoContainer>
      </ContainerBlur>
    </Container>
  );
}
