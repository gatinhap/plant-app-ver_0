import { ReactNode } from 'react';

export interface CallToActionProps {
  children: ReactNode;
  handleClick?: () => void | undefined;
}
