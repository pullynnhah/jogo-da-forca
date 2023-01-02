import styled from "styled-components";

import hangman0 from "../assets/hangman0.png";
import hangman1 from "../assets/hangman1.png";
import hangman2 from "../assets/hangman2.png";
import hangman3 from "../assets/hangman3.png";
import hangman4 from "../assets/hangman4.png";
import hangman5 from "../assets/hangman5.png";
import hangman6 from "../assets/hangman6.png";

export default function Game({ lives, secret }) {
  const hangmen = [
    hangman6,
    hangman5,
    hangman4,
    hangman3,
    hangman2,
    hangman1,
    hangman0,
  ];
  return (
    <Container>
      <img src={hangmen[lives]} alt="forca" />
      <button>Escolher Palavra</button>
      <h1>{secret.split("").join(" ")}</h1>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  justify-items: flex-end;
  grid-template-columns: 400px 500px;
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
    font: 50px/68px "Noto Sans", sans-serif;
  }
`;
