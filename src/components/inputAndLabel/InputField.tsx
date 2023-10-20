import { InputFieldStyled } from "./InputAndLabel.styles.ts";
import { InputFieldProps } from "./InputAndLabel.types.ts";

const InputField = ({
  height,
  type,
  value,
  name,
  placeholder,
  accept,
  handleChange,
  onKeyDown,
}: InputFieldProps) => {
  return (
    <>
      <InputFieldStyled
        $height={height}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        accept={accept}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default InputField;
