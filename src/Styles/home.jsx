import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family:;
    list-style: none;
    text-decoration: none;
    background: black;
    color: white;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 2vh;
`;

export const Figure = styled.figure`
  width: 35%;
  position: relative;
  top: 5vh;
  right: 4vw;
  img {
    width: 600px;
    height: 600px;
    margin: 3vh;
    border-radius: 100% 50% 100% 50%;
  }
`;

export const DivTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60%;
  h1 {
    font-size: 8em;
    width: 50vw;
    position: relative;
    bottom: 7vh;
    left: 5vw;
  }
`;

export const DivLogo = styled.div`
  position: relative;
  top: 9vh;
`;

export const Logo = styled.img`
  width: 3vw;
  margin: 1vh;
`;

export const DivInfo = styled.div`
  border: solid white;
  border-radius: 25px;
  padding: 2vh;
  position: relative;
  top: 4vh;
`;
