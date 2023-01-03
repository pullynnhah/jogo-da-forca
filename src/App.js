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
    console.log("SECRET:", randomWord); /* FIXME: remove this */
    setSecret([...randomWord]);
    setNormSecret([...normalize(randomWord)]);
    setWord([..."_".repeat(randomWord.length)]);
    setLives(6);
    setLetters([]);
    setColor("#000");
    setIsInputDisabled(false);
    setInput("");
  }

  function guessLetter(letter) {
    const newLetters = [...letters, letter];

    setLetters(newLetters);

    if (!normSecret.includes(letter)) {
      const newLives = lives - 1;
      setLives(newLives);

      if (newLives === 0) {
        gameOver(false);
      }
    } else {
      const newWord = normSecret.map((letter, idx) =>
        newLetters.includes(letter) ? secret[idx] : "_"
      );
      setWord(newWord);

      if (!newWord.includes("_")) {
        gameOver(true);
      }
    }
  }

  function gameOver(isWinner) {
    setWord(secret);
    setLetters(alphabet);
    setColor(isWinner ? "#27AE60" : "#f00");
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
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
