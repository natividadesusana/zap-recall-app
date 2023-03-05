import React, { useState } from "react";
import styled from "styled-components";
import start from "../assets/img/start.png";
import turnArrow from "../assets/img/turnArrow.png";
import wrong from "../assets/img/wrong.png";
import doubt from "../assets/img/doubt.png";
import right from "../assets/img/right.png";

export default function Flashcards({ i, question, answer, counter, setCounter }) {
  
  const [showClosedCard, setShowClosedCard] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showFinished, setShowFinished] = useState(false);
  const [iconStart, setIconStart] = useState(start);
  const [color, setColor] = useState("");
  const [dataTest, setDataTest] = useState("");

  function startQuestion() {
    setShowQuestion(true);
    setShowClosedCard(false);
  }

  function replyCard() {
    setShowQuestion(false);
    setShowAnswer(true);
  }

  function answeredFlashcard(color) {
    setShowAnswer(false);
    setShowFinished(true);

    if (color === "redAnswer") {
      setIconStart(wrong);
      setColor("#FF3030");
      setCounter(counter + 1);
      setDataTest("no-icon");
    } else if (color === "orangeAnswer") {
      setIconStart(doubt);
      setColor("#FF922E");
      setCounter(counter + 1);
      setDataTest("partial-icon");
    } else if (color === "greenAnswer") {
      setIconStart(right);
      setColor("#2FBE34");
      setCounter(counter + 1);
      setDataTest("zap-icon");
    }
  }

  return (
    <>
      {showClosedCard && (
        <ClosedCardBox data-test="flashcard">
          <h2 data-test="flashcard-text">PERGUNTA {i}</h2>
          <img
            data-test="play-btn"
            src={start}
            alt={start}
            onClick={() => startQuestion()}
          ></img>
        </ClosedCardBox>
      )}

      {showQuestion && (
        <OpenQuestionBox data-test="flashcard">
          <h2 data-test="flashcard-text">{question}</h2>
          <img
            data-test="turn-btn"
            src={turnArrow}
            alt={turnArrow}
            onClick={() => replyCard()}
          />
        </OpenQuestionBox>
      )}

      {showAnswer && (
        <OpenAnswer data-test="flashcard">
          <h2 data-test="flashcard-text">{answer}</h2>
          <DivButtons>
            <Button
              data-test="no-btn"
              color="#FF3030"
              onClick={() => answeredFlashcard("redAnswer")}
            >
              Não lembrei
            </Button>
            <Button
              data-test="partial-btn"
              color="#FF922E"
              onClick={() => answeredFlashcard("orangeAnswer")}
            >
              Quase não lembrei
            </Button>
            <Button
              data-test="zap-btn"
              color="#2FBE34"
              onClick={() => answeredFlashcard("greenAnswer")}
            >
              Zap!
            </Button>
          </DivButtons>
        </OpenAnswer>
      )}

      {showFinished && (
        <FinishedAnswer data-test="flashcard" color={color}>
          <h2 data-test="flashcard-text">PERGUNTA {i}</h2>
          <img 
            data-test={dataTest}
            src={iconStart}
            alt={iconStart}
          />
        </FinishedAnswer>
      )}
    </>
  );
}

const ClosedCardBox = styled.div`
  width: 70%;
  height: 65px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    background-color: #ffffff;
    margin-left: 10px;
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    cursor: default;
  }
  img {
    background-color: #ffffff;
    margin-right: 10px;
    width: 20px;
    cursor: pointer;
  }
`;

const OpenQuestionBox = styled.div`
  position: relative;
  width: 70%;
  min-height: 131px;
  background-color: #ffffd5;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  h2 {
    background: #ffffd5;
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    border-radius: 5px;
  }
  img {
    background: #ffffd5;
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 20px;
    cursor: pointer;
  }
`;

const OpenAnswer = styled.div`
  position: relative;
  width: 70%;
  min-height: 131px;
  background-color: #ffffd5;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    background: #ffffd5;
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    border-radius: 5px;
    margin-bottom: 30px;
  }
`;

const DivButtons = styled.div`
  background-color: #ffffd5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.button`
  width: 31%;
  height: 37px;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FinishedAnswer = styled.div`
  width: 70%;
  height: 65px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    background-color: #ffffff;
    margin-left: 10px;
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration: line-through;
    color: ${(props) => props.color};
    cursor: default;
  }
  img {
    background-color: #ffffff;
    margin-right: 10px;
    width: 20px;
  }
`;
