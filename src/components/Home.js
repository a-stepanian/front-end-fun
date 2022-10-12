import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.querySelector(".top-door").classList.add("top-door-open");
      document.querySelector(".bottom-door").classList.add("bottom-door-open");
      document.querySelector(".button").classList.add("button-open");
    }
  }, [isOpen]);

  return (
    <Wrapper>
      <div className="top-door">
        <button className="button" onClick={() => setIsOpen(true)}>
          {isOpen ? "ACCESS: GRANTED" : "ACCESS: DENIED"}
        </button>
      </div>
      <div className="bottom-door">
        <div className="center-panel panel"></div>
        <div className="left-panel panel"></div>
        <div className="right-panel panel"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  .top-door {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    transition: top 0.7s linear;
    transition-delay: 0.7s;
    background-color: var(--dark-gray);
    border-bottom: 3px solid var(--black);
  }
  .top-door-open {
    top: -100%;
    box-shadow: 0 0 1rem var(--blue);
  }
  .button {
    z-index: 1;
    font-size: 2rem;
    font-weight: 5;
    position: absolute;
    top: calc((100vh - 10rem) / 2);
    right: calc((100vw - 10rem) / 2);
    width: 10rem;
    height: 10rem;
    border: 3px solid var(--black);
    background-color: var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button-open {
    animation: blink 0.5s;
    box-shadow: 0 0 2rem var(--blue);
  }
  @keyframes blink {
    0% {
      background-color: var(--gray);
    }
    25% {
      background-color: var(--blue);
    }
    50% {
      background-color: var(--gray);
    }
    75% {
      background-color: var(--blue);
    }
    100% {
      background-color: var(--gray);
    }
  }
  .bottom-door {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 100%;
    transition: bottom 0.7s linear;
    transition-delay: 0.7s;
    background-color: var(--dark-gray);
  }
  .bottom-door-open {
    bottom: -100%;
    box-shadow: 0 0 1rem var(--blue);
  }
`;

export default Home;
