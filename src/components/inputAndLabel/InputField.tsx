import { InputFieldStyled } from "./InputAndLabel.styles.ts";
import { InputFieldProps } from "./InputAndLabel.types.ts";
import { forwardRef } from "react";

const InputField: InputFieldProps = forwardRef<
  HTMLInputElement,
  InputFieldProps
>(({ height, type, placeholder, accept, ...props }, ref) => {
  return (
    <>
      <InputFieldStyled
        ref={ref}
        $height={height}
        type={type}
        placeholder={placeholder}
        accept={accept}
        {...props}
      />
    </>
  );
});

export default InputField;
