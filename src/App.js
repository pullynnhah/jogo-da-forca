import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/styles/GlobalStyle";
import Alphabet from "./components/Letters";
import Game from "./components/Game";
import Guess from "./components/Guess";
import { alphabet } from "./utils/data";

export default function App() {
  const [lives, setLives] = useState(6);
  const [secret, setSecret] = useState(null);
  const [isCorrectGuess, setIsCorrectGuess] = useState(null);
  const [letters, setLetters] = useState(alphabet);

  function guessLetter(letter) {
    setLetters({ ...letters, letter: false });
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Game
          lives={lives}
          setLives={setLives}
          secret={secret}
          setSecret={setSecret}
          isCorrectGuess={isCorrectGuess}
          letters={letters}
          setLetters={setLetters}
        />
        <Alphabet
          lives={lives}
          setLives={setLives}
          letters={letters}
          secret={secret}
          setSecret={setSecret}
          setLetters={setLetters}
        />
        <Guess />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;
