import styled from "styled-components";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Hamburger from "./components/Hamburger";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   if (menuOpen) {
  //     document.querySelector(".app-wrapper").classList.add("fuzzy");
  //   } else {
  //     document.querySelector(".app-wrapper").classList.remove("fuzzy");
  //   }
  // }, [menuOpen]);

  return (
    <Wrapper>
      {/* <div className="app-wrapper">
        <Home />
      </div> */}
      {/* <Menu /> */}
      <Hamburger />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .app-wrapper {
    min-height: 100vh;
  }
`;

export default App;
