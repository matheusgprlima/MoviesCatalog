import React, { useState } from "react";
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
  const [age, setAge] = useState("");

  const handleChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setAge(value);
  };
  return (
    <MainContainer>
      <SearchContainer>
        <InputStyled type="text" maxLength={35} />
        <InputStyled
          value={age}
          inputMode="numeric"
          maxLength={4}
          onChange={handleChange}
        />
        <ButtonStyled>Buscar</ButtonStyled>
      </SearchContainer>
      <CardContainer>
        {data.map((item) => {
          return (
            <CardContent>
              <CardImg src={item.Poster} />
              <CardBottom>
                <CardTitle>{item.Title}</CardTitle>
              </CardBottom>
            </CardContent>
          );
        })}
      </CardContainer>
    </MainContainer>
  );
}
