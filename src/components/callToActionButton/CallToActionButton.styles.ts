import styled from "styled-components";
import { Link } from "react-router-dom";

export const CallToActionButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 10px;
  margin-right: 10px;
  border-radius: 100px;
  padding: 15px 25px;
  width: fit-content;
  box-shadow: 4px 4px 0 0 #000;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.largeParagraph}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacing.largeParagraph}px;
  text-transform: uppercase;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  color: ${({ theme }) => theme.colors.cream};

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 0 #000;
    cursor: pointer;
  }
`;

export const CallToActionAsLinkStyled = styled(CallToActionButtonStyled).attrs({
  as: Link,
})`
  text-decoration: none;
`;
