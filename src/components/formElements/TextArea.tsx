import { forwardRef, ForwardRefRenderFunction } from "react";
import { TextAreaProps } from "./FormElements.types.ts";
import { TextAreaStyled } from "./FormElements.styles.ts";

const ForwardRefTextAreaField: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ placeholder, accept, ...props }, forwardedRef) => {
  return (
    <>
      <TextAreaStyled
        ref={forwardedRef}
        placeholder={placeholder}
        accept={accept}
        {...props}
      />
    </>
  );
};

const TextArea = forwardRef(ForwardRefTextAreaField);
export default TextArea;
