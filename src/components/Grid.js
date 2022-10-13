import React from "react";
import styled from "styled-components";

const Grid = () => {
  return (
    <Wrapper>
      <div className="horizon"></div>
      <div className="line left2"></div>
      <div className="line left3"></div>
      <div className="line left4"></div>
      <div className="line left5"></div>
      <div className="line right2"></div>
      <div className="line right3"></div>
      <div className="line right4"></div>
      <div className="line right5"></div>
      <div className="horizon pos1"></div>
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
  .horizon {
    width: 100%;
    height: 1px;
    box-shadow: 0 0 10px var(--red);
    border-top: 1px solid var(--red);
  }
  .pos1 {
    position: absolute;
    top: 50%;
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
`;

export default Grid;
