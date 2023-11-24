import { LabelFieldProps } from "./InputAndLabel.types.ts";

const InputField = ({ children }: LabelFieldProps) => {
  return (
    <>
      <label>{children}</label>
    </>
  );
};

export default InputField;
