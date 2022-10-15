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

export const Contact = styled.div`
  display: flex;

  justify-content: space-evenly;
  height: 90vh;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 55vh;
  width: 40vw;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60vh;
  width: 50vw;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 7vh;

  input {
    height: 4vh;
    background-color: white;
    border-radius: 10px;
    padding: 8px;
    color: black;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 7vh;

  input {
    height: 4vh;
    background-color: white;
    border-radius: 10px;
    padding: 8px;
    color: black;
  }
`;

export const Messenger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 22vh;

  textarea {
    height: 18vh;
    background-color: white;
    border-radius: 10px;
    padding: 8px;
    color: black;
  }
`;

export const Botton = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Btn = styled.input`
  border: solid;
  border-radius: 25px;
  width: 40%;
  align-self: center;
  text-align: center;
  background: #fa7268;
  height: 4vh;
  font-size: 1em;

  :hover {
    background: #863d38;
    cursor: pointer;
  }
`;
