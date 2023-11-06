import styled from "styled-components";

export const InputFieldStyled = styled.input<{
  $height: string;
  $content?: string;
}>`
  box-sizing: border-box;
  margin-top: 6px;
  border: none;
  padding: 10px;
  width: 100%;
  height: ${({ $height }) => $height};
  background-color: var(--cream);
  color: var(--primary-green);

  &::placeholder {
    opacity: 30%;
    color: var(--primary-green);
    font-family: var(--primary-font);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.6px;
  }
`;

export const LabelStyled = styled.label`
  color: var(--cream);
  font-family: var(--primary-font);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.7px;
`;
