import React, { useEffect, useState } from "react";

import {
  ButtonStyled,
  CardContainer,
  InputStyled,
  Label,
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
  console.log("ola");
  const [year, setYear] = useState("");

  const [title, setTitle] = useState("");

  const [movieOrder, setMovieOrder] = useState(movies);

  useEffect(() => {
    const moviesOrdered = orderBy(movies, ["Title"], ["asc"]);
    setMovieOrder(moviesOrdered);
  }, [movies]);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setYear(value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z ]/g, "");
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
    setMovieOrder(moviesOrdered);
  };

  return (
    <MainContainer>
      <SearchContainer onSubmit={handleSubmit}>
        <Label>
          Titulo:{" "}
          <InputStyled
            type="text"
            value={title}
            onChange={handleTitleChange}
            maxLength={35}
          />
        </Label>
        <Label>
          Ano:{" "}
          <InputStyled
            value={year}
            inputMode="numeric"
            maxLength={4}
            onChange={handleYearChange}
          />
        </Label>
        <ButtonStyled type="submit">Buscar</ButtonStyled>
      </SearchContainer>
      {movieOrder.length > 0 && (
        <SortButton onClick={movieOrderBy}>Descending Order</SortButton>
      )}
      <CardContainer>
        {movieOrder.length > 0 &&
          movieOrder.map((movie: IMovie) => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
      </CardContainer>
    </MainContainer>
  );
};
