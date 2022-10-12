import React from "react";
import styled from "styled-components";

const Show = () => {
  return (
    <Wrapper>
      <h1>DASHBOARD</h1>
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
  h1 {
    border: 1px solid var(--blue);
    padding: 1rem 3rem;
    color: var(--blue);
    text-shadow: 0 0 1rem var(--blue);
    font-family: "Big Shoulders Inline Text", cursive;
    font-size: 10rem;
    animation: flash 0.7s infinite;
  }
  @keyframes flash {
    0% {
      text-shadow: 0 0 1px var(--blue);
      font-family: "Big Shoulders Inline Text", cursive;
    }
    50% {
      text-shadow: 0 0 2rem var(--blue);
      color: white;
      font-family: "Big Shoulders Text", cursive;
    }
    100% {
      text-shadow: 0 0 1px var(--blue);
      font-family: "Big Shoulders Inline Text", cursive;
    }
  }
  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 5rem;
    height: 5rem;
    transition: 1s linear;
    color: black;
    font-size: 1rem;
    opacity: 0;
    p {
      animation: spin 5s linear infinite;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }
  .left {
    transform: translateX(-12rem);
  }
  .center {
    border-radius: 50%;
    transform: translateX(0);
    width: 20rem;
    height: 20rem;
    font-size: 15rem;
    opacity: 1;
  }
  .center-red {
    background-color: var(--red);
    box-shadow: 0 0 10rem var(--red);
    p {
      text-shadow: 0 0 3rem white;
    }
  }
  .center-blue {
    border: 0.5rem solid var(--blue);
    background-color: var(--blue);
    box-shadow: 0 0 10rem var(--blue);
    p {
      text-shadow: 0 0 3rem white;
    }
  }
  .center-green {
    border: 0.5rem solid var(--green);
    background-color: var(--green);
    box-shadow: 0 0 10rem var(--green);
    p {
      text-shadow: 0 0 3rem white;
    }
  }
  .right {
    transform: translateX(12rem);
  }
`;

export default Show;
