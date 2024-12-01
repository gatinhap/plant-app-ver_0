import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  padding: 19px 22px;
  color: ${({ theme }) => theme.colors.cream};
  font-size: ${({ theme }) => theme.fontSizes.smallParagraph}px;
  line-height: ${({ theme }) => theme.lineHeight.smallParagraph};
  letter-spacing: ${({ theme }) => theme.letterSpacing.smallParagraph}px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.7);
  background: ${({ theme }) => theme.colors.primaryGreenWithOverlay};
`;

export const PlantNavStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  margin-block: 20px 50px;
`;

export const PlantNavItemStyled = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.mediumGreen};

  &:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 0 #000;
    cursor: pointer;
  }
`;
