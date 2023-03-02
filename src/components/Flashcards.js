import React from "react";
import styled from "styled-components";
import Vector from "../assets/img/Vector.png";

export default function Flashcards() {
  return (
    <CardsContainer>
      <CardBox>
        <h2>PERGUNTA 1</h2>
        <img src={Vector} alt={Vector}></img>
      </CardBox>
      <CardBox>
        <h2>PERGUNTA 2</h2>
        <img src={Vector} alt={Vector}></img>
      </CardBox>
      <CardBox>
        <h2>PERGUNTA 3</h2>
        <img src={Vector} alt={Vector}></img>
      </CardBox>
      <CardBox>
        <h2>PERGUNTA 4</h2>
        <img src={Vector} alt={Vector}></img>
      </CardBox>
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  width: 100%;
  margin-top: 180px;
  margin-bottom: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardBox = styled.div`
  width: 300px;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  h2 {
    background-color: #ffffff;
    margin-left: 10px;
    font-family: 'Recursive', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  img {
    background-color: #ffffff;
    margin-right: 10px;
    width: 20px;
    cursor: pointer;
  }
`;
