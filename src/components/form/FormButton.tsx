import {FormButtonStyled} from "./Form.styles.ts";
import {FormButtonProps} from "./Form.types.ts";

const FormButton = (
    {
        children,
        backgroundColor,
        color,
        handleClick,
        type
    }: FormButtonProps) => {
    return (
        <FormButtonStyled
            $backgroundColor={backgroundColor}
            $color={color}
            onClick={handleClick}
            type={type}
        >
            {children}
        </FormButtonStyled>
    )
}

export default FormButton;