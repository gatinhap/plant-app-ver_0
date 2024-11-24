import { FormButtonStyled } from './Form.styles.ts';
import { FormButtonProps } from './Form.types.ts';

const FormButton = ({ children, handleClick, type }: FormButtonProps) => (
  <FormButtonStyled onClick={handleClick} type={type}>
    {children}
  </FormButtonStyled>
);

export default FormButton;
