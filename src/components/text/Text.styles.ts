import styled from "styled-components";

export const TextStyled = styled.p<{
  $fontSize: number;
  $lineHeight: number;
  $letterSpacing: number;
}>`
  font-size: ${({ $fontSize }) => $fontSize}px;
  line-height: ${({ $lineHeight }) => $lineHeight};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing}px;
`;
