import styled from "styled-components";

import { alphabet } from "../utils/data";

export default function Letters({ letters, guessLetter }) {
  return (
    <Container>
      {alphabet.map(letter => (
        <button
          key={letter}
          onClick={() => guessLetter(letter)}
          disabled={letters.includes(letter)}>
          {letter}
        </button>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 40px);
  gap: 12px;

  justify-content: center;

  button {
    width: 40px;
    height: 40px;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
    font-size: 16px;
    line-height: 19px;

    background: #e1ecf4;
    color: #39739d;
    text-transform: uppercase;
    cursor: pointer;

    &:disabled {
      color: #798a9f;
      background: #9faab5;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      opacity: 0.7;
    }
  }
`;
