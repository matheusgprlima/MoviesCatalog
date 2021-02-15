import React, { useState } from "react";

import {
  ButtonStyled,
  CardContainer,
  InputStyled,
  MainContainer,
  SearchContainer,
} from "./search-movies.styled";

import { MovieCard } from "../../components/movie-card.component";
import { IMovie } from "../../type";
type SearchMoviesProps = {
  movies: IMovie[];
  searchMovies(searchTerm: string, year: string): void;
};
export const SearchMovies = ({ movies, searchMovies }: SearchMoviesProps) => {
  console.log(movies);
  const [year, setYear] = useState("");

  const [title, setTitle] = useState("");

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setYear(value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    searchMovies(title, year);
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
      <CardContainer>
        {movies.length &&
          movies.map((movie: any) => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
      </CardContainer>
    </MainContainer>
  );
};
