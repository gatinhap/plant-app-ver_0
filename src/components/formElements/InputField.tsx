import { forwardRef, ForwardRefRenderFunction } from 'react';
import { InputFieldStyled } from './FormElements.styles.ts';
import { InputFieldProps } from './FormElements.types.ts';

const ForwardRefInputField: ForwardRefRenderFunction<
  HTMLInputElement,
  InputFieldProps
> = ({ type, placeholder, accept, ...props }, forwardedRef) => (
  <InputFieldStyled
    ref={forwardedRef}
    accept={accept}
    placeholder={placeholder}
    type={type}
    {...props}
  />
);

const InputField = forwardRef(ForwardRefInputField);
export default InputField;
