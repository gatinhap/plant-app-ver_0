import { FormButtonStyled } from "./Form.styles.ts";
import { FormButtonProps } from "./Form.types.ts";

const FormButton = ({ children, handleClick, type }: FormButtonProps) => {
  return (
    <FormButtonStyled onClick={handleClick} type={type}>
      {children}
    </FormButtonStyled>
  );
};

export default FormButton;
