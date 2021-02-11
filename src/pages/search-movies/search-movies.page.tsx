import React, { useState } from "react";
import { omdbApi } from "../../services/omdbApi";
import data from "./data.json";
import {
  ButtonStyled,
  CardBottom,
  CardContainer,
  CardContent,
  CardImg,
  CardTitle,
  InputStyled,
  MainContainer,
  SearchContainer,
} from "./search-movies.styled";

export function SearchMovies() {
  const [year, setYear] = useState("");

  const [title, setTitle] = useState("");

  const [movieData, setMovieData] = useState([]);

  const handleChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setYear(value);
  };

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    omdbApi
      .get("/", { params: { s: title, type: "movie" } })
      .then((resp) => {
        if (resp.data.Search) {
          setMovieData(resp.data.Search);
        } else {
          alert(resp.data.Error);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
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
          onChange={handleChange}
        />
        <ButtonStyled type="submit">Buscar</ButtonStyled>
      </SearchContainer>
      <CardContainer>
        {movieData.map((item: any) => {
          return (
            <CardContent>
              <CardImg src={item.Poster} />
              <CardBottom>
                <CardTitle to={`/movie-detail/${data[1].imdbID}`}>
                  {item.Title}
                </CardTitle>
              </CardBottom>
            </CardContent>
          );
        })}
      </CardContainer>
    </MainContainer>
  );
}
