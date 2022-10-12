import React, { useEffect } from "react";
import styled from "styled-components";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const openMenu = () => {
    document.querySelector(".green-box").classList.add("open");
    setMenuOpen(true);
  };

  const closeMenu = () => {
    document.querySelector(".green-box").classList.remove("open");
    setMenuOpen(false);
  };
  useEffect(() => {
    const letter = document.querySelectorAll(".letter");
    if (menuOpen) {
      for (let i = 0; i < letter.length; i++) {
        const time = (i + 1) * 40 + 700; // milliseconds
        setTimeout(() => {
          letter[i].classList.add("show-letter");
        }, time);
      }
    } else {
      for (let i = 0; i < letter.length; i++) {
        letter[i].classList.remove("show-letter");
      }
    }
  }, [menuOpen]);

  return (
    <Wrapper>
      <div className="green-box" onClick={openMenu} onDoubleClick={closeMenu}>
        <p>menu</p>
        <ul>
          <li>
            <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">i</span>
            <span className="letter">s</span> <span className="letter">i</span>
            <span className="letter">s</span> <span className="letter">l</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">e</span> <span className="letter">1</span>
          </li>
          <li>
            <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">i</span>
            <span className="letter">s</span> <span className="letter">i</span>
            <span className="letter">s</span> <span className="letter">l</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">e</span> <span className="letter">2</span>
          </li>
          <li>
            <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">i</span>
            <span className="letter">s</span> <span className="letter">i</span>
            <span className="letter">s</span> <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">e</span> <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">i</span>
            <span className="letter">r</span>
            <span className="letter">d</span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .green-box {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 4.2rem;
    height: 2rem;
    border: 1px solid rgba(150, 250, 100, 0.5);
    transition: background-color 0.4s, border 0.4s, top 0.4s, right 0.4s 0.4s,
      height 0.4s, width 0.4s 0.4s;
    color: rgba(150, 250, 100, 0.5);
    p {
      font-size: 1.3rem;
    }
    &:hover {
      cursor: pointer;
      p {
        color: rgb(150, 250, 100);
      }
    }
  }
  ul > li {
    list-style: none;
  }
  .letter {
    font-size: 1rem;
    display: none;
  }
  .show-letter {
    display: inline;
  }
  .open {
    transition: background-color 0.4s 0.4s, box-shadow 0.4s 0.4s,
      border 0.4s 0.4s, top 0.4s 0.4s, right 0.4s, height 0.4s 0.4s, width 0.4s;
    background-color: rgba(150, 250, 100, 0.1);
    transform: rotate(0deg);
    top: calc((100vh - 18rem) / 2);
    right: calc((100vw - 18rem) / 2);
    width: 18rem;
    height: 18rem;
    border: 1px solid rgb(150, 250, 100);
    box-shadow: 0 0 10px rgba(150, 250, 100, 0.5);
    ul > li {
      margin: 1rem;
      &:hover {
        cursor: pointer;
        color: rgb(150, 250, 100);
        text-shadow: 0 0 10px rgba(150, 250, 100, 0.5);
      }
    }
    &:hover {
      cursor: default;
    }
    p {
      color: rgb(150, 250, 100);
    }
  }
`;

export default Menu;
