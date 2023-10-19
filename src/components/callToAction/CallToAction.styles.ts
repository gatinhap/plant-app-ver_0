import styled from "styled-components";
import { Link } from "react-router-dom";

export const CallToActionStyled = styled.div<{
  $backgroundColor: string;
  $color: string;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
    margin-block: 10px;
    margin-right: 10px;
	border-radius: 100px;
	padding: 15px 25px;
    width: fit-content;
	width: -moz-fit-content;
	box-shadow: 4px 4px 0 0 #000;
	text-align: center;
	font-size: ${({theme}) => theme.fontSizes.largeParagraph}px;
	font-weight: ${({theme}) => theme.fontWeights.medium};
    font-family: ${({theme}) => theme.fonts.primaryFont};
	letter-spacing: ${({theme}) => theme.letterSpacing.largeParagraph}px;
	text-transform: uppercase;
	-webkit-user-select: none; 
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	background-color: ${({$backgroundColor}) => $backgroundColor};
	color: ${({$color}) => $color};

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 0 #000;
    cursor: pointer;
  }
`;

export const CallToActionAsLinkStyled = styled(CallToActionStyled).attrs({
  as: Link,
})`
  text-decoration: none;
`;
