import styled from "styled-components";
import { Link } from "react-router-dom";

export const PlantImageContainerStyled = styled.div`
  width: 100%;
  max-width: 338px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PlantInfoStyled = styled.article`
  box-sizing: border-box;
  margin-block: 20px;
  padding: 0 10px;
  color: var(--cream);
  font-size: 14px;
  line-height: 1.66;
  letter-spacing: 0.7px;
`;

export const PlantNavStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  margin-block: 20px;
`;

export const PlantNavItemStyled = styled(Link)<{
  $backgroundColor: string;
  $color: string;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 44px;
  padding: 10px 17px;
  width: fit-content;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.7);
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};

  &:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 0 #000;
    cursor: pointer;
  }
`;
