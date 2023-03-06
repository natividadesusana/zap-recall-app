import React from "react";
import styled from "styled-components";


export default function Footer({ counter }) {

  return (
    <ResultsFooter>
      <Results data-test="footer">{counter}/8 CONCLUÍDOS</Results>
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
  /* margin-top: 50px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Results = styled.h2`
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  background-color: #ffffff;
  text-align: center;
`;
