import styled from "styled-components";

export const InputFieldStyled = styled.input`
  box-sizing: border-box;
  margin-top: 6px;
  border: none;
  padding: 10px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.primaryGreen};
`;

export const TextAreaStyled = styled(InputFieldStyled).attrs({
  as: "textarea",
})`
  max-width: 100%;
  min-height: 70px;
`;
