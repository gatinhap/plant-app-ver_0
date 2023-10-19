import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItemStyled = styled(Link)<{
  $backgroundColor: string;
  $color: string;
}>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	border-radius: 44px;
	padding: 10px 17px;
	width: fit-content;
	width: -moz-fit-content;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.70);
	font-size: ${({theme}) => theme.fontSizes.regularParagraph}px;
	font-weight: ${({theme}) => theme.fontWeights.normal};
	text-decoration: none;
	-webkit-user-select: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	background-color: ${({$backgroundColor}) => $backgroundColor};
	color: ${({$color}) => $color};

  &:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 0 #000;
    cursor: pointer;
  }
`;
