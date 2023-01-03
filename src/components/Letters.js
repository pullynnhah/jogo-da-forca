import styled from "styled-components";

import Button from "./styles/Button";
import { alphabet } from "../utils/data";

export default function Letters({ letters, guessLetter }) {
  return (
    <Container>
      {alphabet.map(letter => (
        <Button
          key={letter}
          onClick={() => guessLetter(letter)}
          disabled={letters.includes(letter)}>
          {letter}
        </Button>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 40px);
  gap: 12px;

  justify-content: center;
`;
