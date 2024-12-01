import { ReactNode } from 'react';

export const ButtonTypes = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
} as const;

type ButtonType = (typeof ButtonTypes)[keyof typeof ButtonTypes];

export interface FormButtonProps {
  children: ReactNode;
  handleClick?: () => void | undefined;
  type?: ButtonType | undefined;
}

export interface FormValues {
  id: string;
  plantName: string;
  watering: string;
  misting: string;
  light: string;
  soil: string;
  fertilization: string;
  user: string;
}
