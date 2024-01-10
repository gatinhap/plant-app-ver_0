import { InputFieldStyled } from "./FormElements.styles.ts";
import { InputFieldProps } from "./FormElements.types.ts";
import { forwardRef, ForwardRefRenderFunction } from "react";

const ForwardRefInputField: ForwardRefRenderFunction<
  HTMLInputElement,
  InputFieldProps
> = ({ type, placeholder, accept, ...props }, forwardedRef) => {
  return (
    <>
      <InputFieldStyled
        ref={forwardedRef}
        type={type}
        placeholder={placeholder}
        accept={accept}
        {...props}
      />
    </>
  );
};

const InputField = forwardRef(ForwardRefInputField);
export default InputField;
