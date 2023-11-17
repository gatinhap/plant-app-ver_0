import { InputFieldStyled } from "./InputAndLabel.styles.ts";
import { InputFieldProps } from "./InputAndLabel.types.ts";
import { forwardRef, ForwardRefRenderFunction } from "react";

const ForwardRefInputField: ForwardRefRenderFunction<
  HTMLInputElement,
  InputFieldProps
> = ({ height, type, placeholder, accept, ...props }, forwardedRef) => {
  return (
    <>
      <InputFieldStyled
        ref={forwardedRef}
        $height={height}
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
