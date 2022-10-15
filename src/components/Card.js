import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled.section`
  width: 23%;
  border: solid yellow;
  display: flex;
  flex-wrap: wrap;

  img {
    width: 100%;
  }
`;

export default function Card(props) {
  const [isModal, setIsModal] = useState(false);

  return (
    <Container>
      <div>
        <img onClick={() => setIsModal(true)} src={props.imagem} alt="a" />
        {isModal && (
          <div>
            <button onClick={() => setIsModal(false)} color="white">
              X
            </button>
            <h1>{props.titulo}</h1>
            <p>{props.text}</p>
          </div>
        )}
      </div>
    </Container>
  );
}
