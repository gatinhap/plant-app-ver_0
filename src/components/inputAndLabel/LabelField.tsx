import {LabelStyled} from "./InputAndLabel.styles.ts";
import {LabelFieldProps} from "./InputAndLabel.types.ts";

const InputField = (
    {
        children,
    }: LabelFieldProps) => {

    return (
        <>
            <LabelStyled>
                {children}
            </LabelStyled>
        </>
    )
}

export default InputField;