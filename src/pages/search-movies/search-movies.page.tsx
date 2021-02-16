import React, { useState } from "react";

import {
  ButtonStyled,
  CardContainer,
  InputStyled,
  MainContainer,
  SearchContainer,
} from "./search-movies.styled";

import { MovieCard } from "../../components/movie-card/movie-card.component";
import { IMovie } from "../../type";
type SearchMoviesProps = {
  movies: IMovie[];
  searchMovies(searchTerm: string, year: string): void;
};
export const SearchMovies = ({ movies, searchMovies }: SearchMoviesProps) => {
  const [year, setYear] = useState("");

  const [title, setTitle] = useState("");

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
  return (
    <MainContainer>
      <SearchContainer onSubmit={(e) => handleSubmit(e)}>
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
      <CardContainer>
        {movies.length &&
          movies.map((movie: IMovie) => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
      </CardContainer>
    </MainContainer>
  );
};
