import styled from "styled-components";

import hangman0 from "../assets/hangman0.png";
import hangman1 from "../assets/hangman1.png";
import hangman2 from "../assets/hangman2.png";
import hangman3 from "../assets/hangman3.png";
import hangman4 from "../assets/hangman4.png";
import hangman5 from "../assets/hangman5.png";
import hangman6 from "../assets/hangman6.png";

export default function Game({ lives }) {
  const hangmen = [
    hangman6,
    hangman5,
    hangman4,
    hangman3,
    hangman2,
    hangman1,
    hangman0,
  ];
  return <Image src={hangmen[lives]} />;
}

const Image = styled.img`
  width: 400px;
`;
