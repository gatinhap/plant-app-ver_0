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

  &::placeholder {
    opacity: 30%;
    color: ${({ theme }) => theme.colors.primaryGreen};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    font-size: ${({ theme }) => theme.fontSizes.smallParagraph}px;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: ${({ theme }) => theme.lineHeight.smallParagraph};
    letter-spacing: ${({ theme }) => theme.letterSpacing.smallParagraph}px;
  }
`;

export const LabelStyled = styled.label`
  color: ${({ theme }) => theme.colors.cream};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: ${({ theme }) => theme.fontSizes.largeParagraph}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacing.largeParagraph}px;
`;
