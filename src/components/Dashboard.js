import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Dashboard = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (position === 1) setPosition(2);
      if (position === 2) setPosition(3);
      if (position === 3) setPosition(1);
    }, 1200);
  }, [position]);
  useEffect(() => {
    setPosition(1);
  }, []);

  return (
    <Wrapper>
      <div
        className={
          position === 1
            ? "block left"
            : position === 2
            ? "block right"
            : "block center center-red"
        }
      >
        <p>&#x2623;</p>
      </div>
      <div
        className={
          position === 1
            ? "block center center-blue"
            : position === 2
            ? "block left"
            : "block right"
        }
      >
        <p>&#x269B;</p>
      </div>
      <div
        className={
          position === 1
            ? "block right"
            : position === 2
            ? "block center center-green"
            : "block left"
        }
      >
        <p>&#x2622;</p>
      </div>
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

export default Dashboard;
