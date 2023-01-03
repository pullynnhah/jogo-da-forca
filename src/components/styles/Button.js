import styled from "styled-components";

const Button = styled.button`
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
`;

export default Button;
