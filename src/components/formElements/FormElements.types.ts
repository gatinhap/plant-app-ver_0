import { ReactNode } from "react";

export type InputFieldProps = {
  type?: string;
  placeholder?: string;
  accept?: string;
};

export type LabelFieldProps = {
  children: ReactNode;
};

export type TextAreaProps = {
  placeholder?: string;
};
