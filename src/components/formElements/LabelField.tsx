import { LabelFieldProps } from './FormElements.types.ts';

const LabelField = ({ children, htmlFor }: LabelFieldProps) => (
  <label htmlFor={htmlFor}>{children}</label>
);

export default LabelField;
