import styled from "styled-components";

export const TextStyled = styled.p<{
  $fontSize: string;
  $lineHeight: string;
  $letterSpacing: string;
}>`
  font-size: ${({ $fontSize }) => $fontSize}px;
  line-height: ${({ $lineHeight }) => $lineHeight};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing}px;
`;
