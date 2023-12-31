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
  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.primaryGreen};
`;
