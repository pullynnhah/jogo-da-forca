import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/styles/GlobalStyle";
import Letters from "./components/Letters";
import Game from "./components/Game";
import Guess from "./components/Guess";
import { alphabet, words } from "./utils/data";
import { random, normalize } from "./utils/tools";

export default function App() {
  const [lives, setLives] = useState(6);
  const [secret, setSecret] = useState([]);
  const [normSecret, setNormSecret] = useState([]);
  const [word, setWord] = useState([]);
  const [letters, setLetters] = useState(alphabet);
  const [color, setColor] = useState("#000");

  const [input, setInput] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  function startGame() {
    const randomWord = words[random(words.length)];

    setSecret([...randomWord]);
    setNormSecret([...normalize(randomWord)]);
    setWord([..."_".repeat(randomWord.length)].map(dash => ` ${dash}`));
    setLives(6);
    setLetters([]);
    setColor("#000");
    setIsInputDisabled(false);
    setInput("");
  }

  function guessLetter(letter) {
    const newLetters = [...letters, letter];
    setLetters(newLetters);

    if (normSecret.includes(letter)) {
      correctGuess(newLetters);
    } else {
      wrongGuess();
    }
  }

  function wrongGuess() {
    const newLives = lives - 1;
    setLives(newLives);

    if (newLives === 0) {
      gameOver(false);
    }
  }

  function correctGuess(newLetters) {
    const newWord = normSecret.map((letter, idx) =>
      newLetters.includes(letter) ? secret[idx] : " _"
    );
    setWord(newWord);

    if (!newWord.includes(" _")) {
      gameOver(true);
    }
  }

  function gameOver(isWinner) {
    setWord(secret);
    setLetters(alphabet);
    setIsInputDisabled(true);
    setColor(isWinner ? "#27AE60" : "#f00");
    if (!isWinner) setLives(0);
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Game lives={lives} startGame={startGame} word={word} color={color} />
        <Letters letters={letters} guessLetter={guessLetter} />
        <Guess
          secret={secret}
          normSecret={normSecret}
          gameOver={gameOver}
          isInputDisabled={isInputDisabled}
          input={input}
          setInput={setInput}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`;
