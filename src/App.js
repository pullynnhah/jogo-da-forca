import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/styles/GlobalStyle";
import Alphabet from "./components/Letters/Letters";
import Game from "./components/Game";
import Guess from "./components/Guess";

export default function App() {
  const [lives, setLives] = useState(6);
  const [secret, setSecret] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Game
          lives={lives}
          setLives={setLives}
          secret={secret}
          setSecret={setSecret}
        />
        <Alphabet lives={lives} setLives={setLives} />
        <Guess />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;
