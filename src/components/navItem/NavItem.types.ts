import { ReactNode } from "react";

export type NavItemProps = {
  children: ReactNode;
  linkTo: string;
  shouldDisplayOnTop?: boolean;
};
