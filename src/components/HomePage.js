import React from "react";
import styled from "styled-components";
import image1 from "../assets/img/image1.png";

export default function HomePage({ startZapRecall }) {
  return (
    <Container>
      <Image src={image1} alt={image1} />
      <Title>ZapRecall</Title>
      <Button data-test="start-btn" onClick={() => startZapRecall()}>Iniciar Recall!</Button>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 136px;
`;

const Title = styled.h1`
  font-family: 'Righteous', cursive;
  font-weight: 400;
  font-size: 36px;
  letter-spacing: -0.012em;
  color: #ffffff;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
`;

const Button = styled.button`
  width: 246px;
  height: 54px;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #d70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #d70900;
`;
