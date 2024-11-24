import { forwardRef, ForwardRefRenderFunction } from 'react';
import { TextAreaProps } from './FormElements.types.ts';
import { TextAreaStyled } from './FormElements.styles.ts';

const ForwardRefTextAreaField: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ placeholder }, forwardedRef) => (
  <TextAreaStyled ref={forwardedRef} placeholder={placeholder} />
);

const TextArea = forwardRef(ForwardRefTextAreaField);
export default TextArea;
