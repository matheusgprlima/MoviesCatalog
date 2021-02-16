import React, { useEffect, useState } from "react";

import {
  ButtonStyled,
  CardContainer,
  InputStyled,
  MainContainer,
  SearchContainer,
  SortButton,
} from "./search-movies.styled";

import { MovieCard } from "../../components/movie-card/movie-card.component";
import { IMovie } from "../../type";
import { orderBy } from "lodash";
type SearchMoviesProps = {
  movies: IMovie[];
  searchMovies(searchTerm: string, year: string): void;
};
export const SearchMovies = ({ movies, searchMovies }: SearchMoviesProps) => {
  console.log(movies);

  const [year, setYear] = useState("");

  const [title, setTitle] = useState("");

  const [movieOrdered, setMovieOrdered] = useState(movies);

  useEffect(() => {
    const moviesOrdered = orderBy(movies, ["Title"], ["asc"]);
    setMovieOrdered(moviesOrdered);
  }, [movies]);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setYear(value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\w\s]/gi, "");
    setTitle(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length > 0 && year.length > 0) searchMovies(title, year);
    if (title.length > 0) return searchMovies(title, year);
    if (year.length > 0 && title.length < 0) return;
    return;
  };

  const movieOrderBy = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const moviesOrdered = orderBy(movies, ["Title"], ["desc"]);
    setMovieOrdered(moviesOrdered);
  };

  return (
    <MainContainer>
      <SearchContainer onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          value={title}
          onChange={handleTitleChange}
          maxLength={35}
        />
        <InputStyled
          value={year}
          inputMode="numeric"
          maxLength={4}
          onChange={handleYearChange}
        />
        <ButtonStyled type="submit">Buscar</ButtonStyled>
      </SearchContainer>
      <SortButton onClick={movieOrderBy}>Descending Order</SortButton>
      <CardContainer>
        {movieOrdered.length > 0 &&
          movieOrdered.map((movie: IMovie) => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
      </CardContainer>
    </MainContainer>
  );
};
