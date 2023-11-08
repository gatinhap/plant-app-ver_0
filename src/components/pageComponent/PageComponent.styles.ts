import styled from "styled-components";

export const StyledPageComponent = styled.section`
  position: relative;
  margin-inline: auto;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.cream};
  padding-block: 55px;
  padding-inline: 30px;
  max-width: 400px;
`;
