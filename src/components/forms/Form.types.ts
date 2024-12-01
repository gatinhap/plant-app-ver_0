import { ReactNode } from 'react';

export interface FormButtonProps {
  children: ReactNode;
  handleClick?: () => void | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
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
