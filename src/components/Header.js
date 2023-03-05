import React from "react";
import styled from "styled-components";
import image1 from "../assets/img/image1.png";

export default function Header() {
  return (
    <CardHeader>
      <Image src={image1} alt={image1} />
      <Title>ZapRecall</Title>
    </CardHeader>
  );
}

const CardHeader = styled.div`
  padding: 30px;
  /* position: fixed;
  top: 0;
  bottom: auto;
  z-index: 2; */
  margin-bottom: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 52px;
  margin-right: 15px;
`;

const Title = styled.h1`
  width: 203px;
  font-family: 'Righteous', cursive;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: -0.012em;
  color: #ffffff;
  text-align: center;
`;
