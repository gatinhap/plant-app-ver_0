import { PropsWithChildren } from "react";
import { ParagraphStylesMap } from "./Text.constans.tsx";

export type TextTypes = PropsWithChildren<{
  variant: keyof typeof ParagraphStylesMap;
}>;
