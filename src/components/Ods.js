import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Card from "./Card.js";
import Bolo from "../imgs/bolo.png";
import Pizza from "../imgs/pizza.png";
import Vitamina from "../imgs/vitamina.png";
import Tulips from "../imgs/Tulips.jpg";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

const Box = styled.main`
  border: solid red;
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Ods() {
  return (
    <Box>
      <GlobalStyle />
      <Card imagem={Bolo} titulo="Primeiro" text="Texto 1" />
      <Card imagem={Pizza} titulo="Segundo" text="Texto 2" />
      <Card imagem={Vitamina} titulo="Terceiro" text="Texto 3" />
      <Card imagem={Tulips} titulo="Quarto" text="Texto 4" />
    </Box>
  );
}
