import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/styles/GlobalStyle";
import Alphabet from "./components/Alphabet/Alphabet";
import Game from "./components/Game";
import Guess from "./components/Guess";

export default function App() {
  const [lives, setLives] = useState(6);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Game lives={lives} />
        <Alphabet lives={lives} setLives={setLives} />
        <Guess />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;
