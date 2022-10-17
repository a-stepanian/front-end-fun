import React, { useState } from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      document.querySelector(".top-left").classList.add("open-top-left");
      document.querySelector(".top-right").classList.add("open-top-right");
      document
        .querySelector(".bottom-right")
        .classList.add("open-bottom-right");
      document.querySelector(".bottom-left").classList.add("open-bottom-left");
      document.querySelector(".menu").classList.add("open-menu");
      document.querySelector(".top-left").classList.remove("close-top-left");
      document.querySelector(".top-right").classList.remove("close-top-right");
      document
        .querySelector(".bottom-right")
        .classList.remove("close-bottom-right");
      document
        .querySelector(".bottom-left")
        .classList.remove("close-bottom-left");
      document.querySelector(".menu").classList.remove("close-menu");
    } else {
      document.querySelector(".top-left").classList.add("close-top-left");
      document.querySelector(".top-right").classList.add("close-top-right");
      document
        .querySelector(".bottom-right")
        .classList.add("close-bottom-right");
      document.querySelector(".bottom-left").classList.add("close-bottom-left");
      document.querySelector(".menu").classList.add("close-menu");

      document.querySelector(".top-left").classList.remove("open-top-left");
      document.querySelector(".top-right").classList.remove("open-top-right");
      document
        .querySelector(".bottom-right")
        .classList.remove("open-bottom-right");
      document
        .querySelector(".bottom-left")
        .classList.remove("open-bottom-left");
      document.querySelector(".menu").classList.remove("open-menu");

      setIsMenuOpen(false);
    }
  };
  return (
    <Wrapper>
      <button className="hamburger-wrapper" onClick={openMenu}>
        <div className="box top-left" />
        <div className="box top-right" />
        <div className="box bottom-right" />
        <div className="box bottom-left" />
        <div className="menu">
          <Grid />
        </div>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hamburger-wrapper {
    position: relative;
    margin: 1rem 0 0 1rem;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
  }
  .menu {
    margin: 0rem;
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    opacity: 0;
    background-color: var(--black);
  }
  .open-menu {
    animation: open-menu 1.5s forwards;
  }
  .close-menu {
    animation: close-menu 1.5s forwards;
  }
  @keyframes open-menu {
    0% {
      margin: 0rem;
      width: 3rem;
      height: 3rem;
      opacity: 0;
      background-color: var(--black);
    }
    50% {
      opacity: 0;
      margin: 1rem;
      width: 1rem;
      height: 1rem;
      background-color: transparent;
      border: 1px solid transparent;
    }
    100% {
      opacity: 1;
      margin: 1rem;
      width: calc(100vw - 4rem);
      height: calc(100vh - 4rem);
      background-color: var(--aqua2);
      border: 1px solid var(--aqua);
    }
  }
  @keyframes close-menu {
    0% {
      opacity: 1;

      margin: 1rem;
      width: calc(100vw - 4rem);
      height: calc(100vh - 4rem);
      background-color: var(--aqua2);
      border: 1px solid var(--aqua);
    }
    50% {
      opacity: 0;

      margin: 1rem;
      width: 1rem;
      height: 1rem;
      background-color: transparent;
      border: 1px solid transparent;
    }
    100% {
      opacity: 0;
      background-color: var(--black);
      margin: 0;
      width: 3rem;
      height: 3rem;
    }
  }

  .box {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border: 2px solid var(--aqua);
    outline: 2px solid var(--aqua2);
  }

  // TOP LEFT BOX
  .top-left {
    top: 0;
    left: 0;
  }
  .open-top-left {
    animation: open-top-left 1.5s forwards;
  }
  @keyframes open-top-left {
    0% {
      top: 0;
    }
    50% {
      top: 1rem;
    }
    100% {
      top: calc(100vh - 4rem);
    }
  }
  .close-top-left {
    animation: close-top-left 1.5s forwards;
  }
  @keyframes close-top-left {
    0% {
      top: calc(100vh - 4rem);
    }
    50% {
      top: 1rem;
    }
    100% {
      top: 0;
    }
  }

  // TOP RIGHT BOX
  .top-right {
    top: 0;
    right: 0;
  }
  .open-top-right {
    animation: open-top-right 1.5s forwards;
  }
  .close-top-right {
    animation: close-top-right 1.5s forwards;
  }
  @keyframes open-top-right {
    0% {
      right: 0;
    }
    50% {
      right: 1rem;
    }
    100% {
      right: 1rem;
    }
  }
  @keyframes close-top-right {
    0% {
      right: 1rem;
    }
    50% {
      right: 1rem;
    }
    100% {
      right: 0;
    }
  }

  // BOTTOM RIGHT BOX
  .bottom-right {
    bottom: 0;
    right: 0;
  }
  .open-bottom-right {
    animation: open-bottom-right 1.5s forwards;
  }
  .close-bottom-right {
    animation: close-bottom-right 1.5s forwards;
  }
  @keyframes open-bottom-right {
    0% {
      bottom: 0;
      right: 0;
    }
    50% {
      bottom: 1rem;
      right: 0;
    }
    100% {
      bottom: 1rem;
      right: calc(5rem - 100vw);
    }
  }
  @keyframes close-bottom-right {
    0% {
      bottom: 1rem;
      right: calc(5rem - 100vw);
    }
    50% {
      bottom: 1rem;
      right: 0;
    }
    100% {
      bottom: 0;
      right: 0;
    }
  }

  // BOTTOM LEFT BOX
  .bottom-left {
    bottom: 0;
    left: 0;
  }
  .open-bottom-left {
    animation: open-bottom-left 1.5s forwards;
  }
  .close-bottom-left {
    animation: close-bottom-left 1.5s forwards;
  }
  @keyframes open-bottom-left {
    0% {
      left: 0;
    }
    50% {
      left: 1rem;
      bottom: 0;
    }
    100% {
      bottom: calc(5rem - 100vh);
      left: calc(100vw - 4rem);
    }
  }
  @keyframes close-bottom-left {
    0% {
      bottom: calc(5rem - 100vh);
      left: calc(100vw - 4rem);
    }
    50% {
      left: 1rem;
      bottom: 0;
    }
    100% {
      bottom: 0;
      left: 0;
    }
  }
`;

export default Hamburger;
