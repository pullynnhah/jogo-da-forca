import styled from "styled-components";
import Button from "./styles/Button";

export default function Guess({
  secret,
  normSecret,
  gameOver,
  isInputDisabled,
  input,
  setInput,
}) {
  function handleInput() {
    gameOver(input === secret.join("") || input === normSecret.join(""));
    setInput("");
  }

  return (
    <Container>
      <label htmlFor="guess">Já sei a palavra!</label>
      <input
        disabled={isInputDisabled}
        value={input}
        id="guess"
        onChange={e => setInput(e.target.value)}
      />
      <GuessButton onClick={handleInput} disabled={isInputDisabled}>
        Chutar
      </GuessButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  label {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }

  input {
    width: 353px;
    height: 40px;

    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;

    &:disabled {
      background: #e6ecf2;
      cursor: not-allowed;
    }
  }
`;

const GuessButton = styled(Button)`
  width: 100px;
`;
