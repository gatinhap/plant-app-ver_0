import styled from 'styled-components';

const LogoutButtonStyled = styled.div<{
  $shouldDisplayOnTop: boolean | undefined;
}>`
  ${({ $shouldDisplayOnTop }) =>
    $shouldDisplayOnTop &&
    `
    position: absolute;
    top: 10px;
    right: 0;
  `}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 44px;
  padding: 10px 17px;
  width: fit-content;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.regularParagraph}px;
  text-decoration: none;
  user-select: none;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.mediumGreen};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 0 #000;
    cursor: pointer;
  }
`;

export default LogoutButtonStyled;
