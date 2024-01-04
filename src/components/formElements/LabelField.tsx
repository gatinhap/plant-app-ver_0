import { LabelFieldProps } from "./FormElements.types.ts";

const InputField = ({ children }: LabelFieldProps) => {
  return (
    <>
      <label>{children}</label>
    </>
  );
};

export default InputField;
