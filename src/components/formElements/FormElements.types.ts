import { ReactNode } from 'react';

export interface InputFieldProps {
  type?: string;
  placeholder?: string;
  accept?: string;
  className?: string;
  id?: string;
  name?: string;
  value?: string;
}

export interface LabelFieldProps {
  children: ReactNode;
  htmlFor?: string;
}

export interface TextAreaProps {
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string;
}
