import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Show from "./Show";
import Dashboard from "./Dashboard";
import Grid from "./Grid";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.querySelector(".top-door").classList.add("top-door-open");
      document.querySelector(".bottom-door").classList.add("bottom-door-open");
      document.querySelector(".button").classList.add("button-open");
      document.querySelector(".filter").classList.add("clear");
    }
  }, [isOpen]);

  return (
    <Wrapper>
      <Grid isOpen={isOpen} />
      <div className="bottom-door">
        <div className="center-panel panel"></div>
        <div className="left-panel panel"></div>
        <div className="right-panel panel"></div>
      </div>
      <div className="top-door">
        <button className="button" onClick={() => setIsOpen(true)}>
          {isOpen ? "ACCESS: GRANTED" : "ACCESS: DENIED"}
        </button>
        <div className="text-wrapper">
          <p className="text">NEBUCHADNEZZAR II CONTROL PANEL</p>
          <p className="text">METACORTEX</p>
          <p className="text">P3-02Z0735S</p>
        </div>
      </div>
      <div className="filter"></div>
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
    transition: top 0.8s linear;
    transition-delay: 1.1s;
    background: url("https://images.unsplash.com/photo-1514092135741-08b367214e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1958&q=80");
    border-bottom: 2px solid var(--red);
    box-shadow: 0 0 0.5rem var(--red);
    .text-wrapper {
      position: relative;
      z-index: 1;
      padding: 1rem;
      font-size: 2rem;
      text-shadow: 1px 1px 1px black;
    }
  }
  .top-door-open {
    border-color: var(--blue);
    top: -100%;
    box-shadow: 0 0 1rem var(--blue);
  }
  .button {
    color: var(--red);
    z-index: 1;
    font-size: 2rem;
    font-weight: 5;
    position: absolute;
    top: calc((100vh - 10rem) / 2);
    right: calc((100vw - 10rem) / 2);
    width: 10rem;
    height: 10rem;
    border: 2px solid var(--red);
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0.5rem var(--red);
    &:hover {
      color: var(--white);
      background-color: var(--dark-gray);
    }
  }
  .button-open {
    color: var(--whiteS);
    background-color: var(--dark-gray);
    border-color: var(--blue);
    animation: blink 0.3s;
    box-shadow: 0 0 2rem var(--blue);
  }
  @keyframes blink {
    0% {
      background-color: var(--blue);
    }
    24% {
      background-color: var(--blue);
    }
    25% {
      background-color: var(--dark-gray);
    }
    49% {
      background-color: var(--dark-gray);
    }
    50% {
      background-color: var(--blue);
    }
    74% {
      background-color: var(--blue);
    }
    75% {
      background-color: var(--dark-gray);
    }
    100% {
      background-color: var(--dark-gray);
    }
  }
  .bottom-door {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 100%;
    transition: bottom 0.8s linear;
    transition-delay: 1.1s;
    background: url("https://images.unsplash.com/photo-1514092135741-08b367214e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1958&q=80");
    box-shadow: 0 0 1rem var(--red);
  }
  .bottom-door-open {
    bottom: -100%;
    box-shadow: 0 0 1rem var(--blue);
  }

  .filter {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    transition: 0.5s;
  }
  .clear {
    backdrop-filter: none;
  }
`;

export default Home;
