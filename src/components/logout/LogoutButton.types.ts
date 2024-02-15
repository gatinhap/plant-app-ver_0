import { ReactNode } from "react";

export type LogoutButtonProps = {
  children: ReactNode;
  handleClick?: () => void | undefined;
  shouldDisplayOnTop?: boolean;
};
