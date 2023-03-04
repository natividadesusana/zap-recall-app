import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <ResultsFooter>
      <Results data-test="footer">1/8 CONCLUÍDOS</Results>
    </ResultsFooter>
  );
}

const ResultsFooter = styled.div`
  background-color: #ffffff;
  height: 70px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Results = styled.p`
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  background-color: #ffffff;
  text-align: center;
`;
