import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItemStyled = styled(Link)<{
  $backgroundColor: string;
  $color: string;
  $shouldDisplayOnTop: boolean;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 44px;
  padding: 10px 17px;
  width: fit-content;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.7);
  font-size: ${({ theme }) => theme.fontSizes.regularParagraph}px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  text-decoration: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};

  ${({ $shouldDisplayOnTop }) =>
    $shouldDisplayOnTop &&
    `
    position: absolute;
    top: 10px;
    right: 0;
  `}
  &:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 0 #000;
    cursor: pointer;
  }
`;

export const RenderOnTop = {
  position: "absolute",
  top: "10px",
  right: "0",
};
