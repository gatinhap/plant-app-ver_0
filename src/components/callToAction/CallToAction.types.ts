import { ReactNode } from "react";

export type CallToActionProps = {
  children: ReactNode;
  handleClick?: () => void | undefined;
};
