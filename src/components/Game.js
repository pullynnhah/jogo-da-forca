import styled from "styled-components";

import hangman0 from "../assets/hangman0.png";
import hangman1 from "../assets/hangman1.png";
import hangman2 from "../assets/hangman2.png";
import hangman3 from "../assets/hangman3.png";
import hangman4 from "../assets/hangman4.png";
import hangman5 from "../assets/hangman5.png";
import hangman6 from "../assets/hangman6.png";

import { words } from "../utils/data";
import { normalize, random } from "../utils/tools";

export default function Game({
  lives,
  setLives,
  secret,
  setSecret,
  isCorrectGuess,
  letters,
  setLetters,
}) {
  const hangmen = [
    hangman6,
    hangman5,
    hangman4,
    hangman3,
    hangman2,
    hangman1,
    hangman0,
  ];

  function chooseWord() {
    const word = words[random(words.length)];
    console.log("SECRET:", word); /* FIXME: remove this */
    setSecret(
      [...word].map(letter => ({
        letter,
        normLetter: normalize(letter),
        hidden: true,
      }))
    );
    setLives(6);

    const newLetters = { ...letters };
    for (const key in newLetters) {
      newLetters[key] = false;
    }
    setLetters(newLetters);
  }

  function displayWord() {
    if (!secret) return "";
    return secret
      .map(({ letter, hidden }) => (hidden ? "_" : letter))
      .join(" ");
  }

  function getColor() {
    if (isCorrectGuess) return "#27AE60";
    return secret?.some(({ hidden }) => hidden) ? "#000" : "#f00";
  }

  return (
    <Container>
      <img src={hangmen[lives]} alt="forca" />
      <button onClick={chooseWord}>Escolher Palavra</button>
      <h1 color={getColor()}>{displayWord()}</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin: 50px 0;
  display: grid;
  justify-content: center;
  justify-items: flex-end;
  grid-template-columns: 400px 600px;
  grid-template-areas:
    "image btn"
    "image word";

  img {
    grid-area: image;
    width: 400px;
  }

  button {
    grid-area: btn;
    width: 200px;
    height: 60px;

    color: #fff;
    font-size: 20px;
    line-height: 23px;

    background: #27ae60;
    border-radius: 8px;
    margin-top: 40px;
  }

  h1 {
    grid-area: word;
    align-self: flex-end;
    color: ${props => props.color};
    font: 50px/68px "Noto Sans", sans-serif;
  }
`;
