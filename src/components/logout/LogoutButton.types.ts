import { ReactNode } from 'react';

export interface LogoutButtonProps {
  children: ReactNode;
  handleClick?: () => void | undefined;
  shouldDisplayOnTop?: boolean;
}
