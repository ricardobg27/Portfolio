import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    background: black;
    color: white;
  }
`;

export const DivBox = styled.div`
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
  justify-content: space-evenly;
  font-size: 2em;
`;
