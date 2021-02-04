import React from "react";
import {
  ButtonStyled,
  ContainerForm,
  FormStyled,
  InputStyled,
} from "./search-movies.styled";

export function SearchMovies() {
  return (
    <ContainerForm>
      <FormStyled>
        <InputStyled type="text" />
        <InputStyled type="number" max="9999" maxLength={4} />
        <ButtonStyled>Buscar</ButtonStyled>
      </FormStyled>
    </ContainerForm>
  );
}
