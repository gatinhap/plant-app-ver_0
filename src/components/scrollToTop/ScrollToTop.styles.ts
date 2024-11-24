import styled from 'styled-components';

export const ScrollToTopStyled = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  border-radius: 50%;
  width: 29px;
  height: 29px;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 1));
  background-color: ${({ theme }) => theme.colors.lime};

  &:hover {
    width: 28px;
    height: 28px;
    cursor: pointer;
    filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 1));
  }
`;
