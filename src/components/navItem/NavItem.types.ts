import { ReactNode } from 'react';

export interface NavItemProps {
  children: ReactNode;
  linkTo: string;
  shouldDisplayOnTop?: boolean;
}
