import styled from 'styled-components';

const TextStyled = styled.p<{
  $fontSize: number;
  $lineHeight: number;
  $letterSpacing: number;
  $color?: string;
}>`
  font-size: ${({ $fontSize }) => $fontSize}px;
  line-height: ${({ $lineHeight }) => $lineHeight};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing}px;
  color: ${({ $color }) => $color};
`;

export default TextStyled;
