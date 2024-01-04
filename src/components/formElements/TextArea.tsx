import { forwardRef, ForwardRefRenderFunction } from "react";
import { TextAreaProps } from "./FormElements.types.ts";
import { TextAreaStyled } from "./FormElements.styles.ts";

const ForwardRefTextAreaField: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ placeholder, ...props }, forwardedRef) => {
  return (
    <TextAreaStyled ref={forwardedRef} placeholder={placeholder} {...props} />
  );
};

const TextArea = forwardRef(ForwardRefTextAreaField);
export default TextArea;
