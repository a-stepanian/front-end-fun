import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Grid = ({ isOpen }) => {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setPause(false);
      }, 1000);
    }
  }, [isOpen]);

  useEffect(() => {
    console.log(counter);
    if (!pause) {
      setTimeout(() => {
        if (counter < 50) {
          if (step === 1) setStep(2);
          if (step === 2) setStep(3);
          if (step === 3) setStep(4);
          if (step === 4) setStep(1);
          setCounter((prev) => prev + 2);
        }
      }, 30);
    }
  }, [step, pause]);

  return (
    <Wrapper>
      <div className="hline"></div>
      <div
        className="hline pos0"
        style={{
          top: `${
            step === 1
              ? "50%"
              : step === 2
              ? "50.25%"
              : step === 3
              ? "50.5%"
              : "50.75%"
          }`,
        }}
      ></div>
      <div
        className="hline pos1"
        style={{
          top: `${
            step === 1 ? "51%" : step === 2 ? "52%" : step === 3 ? "53%" : "54%"
          }`,
        }}
      ></div>
      <div
        className="hline pos2"
        style={{
          top: `${
            step === 1 ? "55%" : step === 2 ? "57%" : step === 3 ? "59%" : "61%"
          }`,
        }}
      ></div>
      <div
        className="hline pos3"
        style={{
          top: `${
            step === 1 ? "63%" : step === 2 ? "66%" : step === 3 ? "69%" : "72%"
          }`,
        }}
      ></div>
      <div
        className="hline pos4"
        style={{
          top: `${
            step === 1 ? "75%" : step === 2 ? "79%" : step === 3 ? "83%" : "87%"
          }`,
        }}
      ></div>
      <div
        className="hline pos5"
        style={{
          top: `${
            step === 1
              ? "91%"
              : step === 2
              ? "96%"
              : step === 3
              ? "100%"
              : "100%"
          }`,
        }}
      ></div>
      <div className="line left2"></div>
      <div className="line left3"></div>
      <div className="line left4"></div>
      <div className="line left5"></div>
      <div className="line right2"></div>
      <div className="line right3"></div>
      <div className="line right4"></div>
      <div className="line right5"></div>
      <div
        className="blue-box"
        style={{
          transform: `scale(${counter < 50 ? counter / 25 : 2})`,
        }}
      ></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .hline {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    box-shadow: 0 0 10px var(--red);
    border-top: 1px solid var(--red);
  }
  .pos0,
  .pos1 {
    position: absolute;
  }
  .pos2 {
    height: 2px;
    border-top: 2px solid var(--red);
    position: absolute;
    top: 53%;
  }
  .pos3 {
    height: 3px;
    border-top: 3px solid var(--red);
    position: absolute;
    top: 58%;
  }
  .pos4 {
    height: 5px;
    border-top: 5px solid var(--red);
    position: absolute;
    top: 70%;
  }
  .pos5 {
    height: 7px;
    border-top: 7px solid var(--red);
    position: absolute;
    top: 51%;
  }
  .line {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    height: calc(100vh + 100vw);
    width: 3px;
    border-right: 3px solid var(--red);
    box-shadow: 0 0 10px var(--red);
    transform-origin: top right;
  }
  .left1 {
    transform: rotate(15deg);
  }
  .left2 {
    transform: rotate(30deg);
    width: 10px;
    border-right: 10px solid var(--red);
  }
  .left3 {
    transform: rotate(65deg);
    width: 6px;
    border-right: 6px solid var(--red);
  }
  .left4 {
    transform: rotate(80deg);
    width: 4px;
    border-right: 4px solid var(--red);
  }
  .left5 {
    transform: rotate(87deg);
  }
  .right1 {
    transform: rotate(-15deg);
  }
  .right2 {
    transform: rotate(-30deg);
    width: 10px;
    border-right: 10px solid var(--red);
  }
  .right3 {
    transform: rotate(-65deg);
    width: 6px;
    border-right: 6px solid var(--red);
  }
  .right4 {
    transform: rotate(-80deg);
    width: 4px;
    border-right: 4px solid var(--red);
  }
  .right5 {
    transform: rotate(-87deg);
  }
  .blue-box {
    height: 15rem;
    width: 15rem;
    background-color: black;
    border: 1px solid var(--blue);
  }
`;

export default Grid;
