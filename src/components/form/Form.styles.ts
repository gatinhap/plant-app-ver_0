import styled from "styled-components";
import {CallToActionStyled} from "../callToAction/CallToAction.styles.ts";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	grid-gap: 25px;
	margin-block: 50px;
`

export const FormButtonStyled = styled(CallToActionStyled).attrs({
    as: 'button'
})`
	outline: unset;
	border: unset;
`