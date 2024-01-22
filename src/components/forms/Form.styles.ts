import styled from "styled-components";
import { CallToActionButtonStyled } from "../callToActionButton/CallToActionButton.styles.ts";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 25px;
  margin-block: 50px;
`;

export const FormButtonStyled = styled(CallToActionButtonStyled).attrs({
  as: "button",
})`
  outline: unset;
  border: unset;
`;
