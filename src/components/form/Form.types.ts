import { ReactNode } from "react";

export type FormButtonProps = {
  children: ReactNode;
  handleClick?: () => void | undefined;
  type?: "button" | "submit" | "reset" | undefined;
};

export type FormValues = {
  plantID: string;
  plantName: string;
  watering: string;
  misting: string;
  light: string;
  soil: string;
  fertilization: string;
};
