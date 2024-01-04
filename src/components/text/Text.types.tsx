import { PropsWithChildren } from "react";
import { ParagraphStylesMap, TextColorsMap } from "./Text.constans.tsx";

export type TextTypes = PropsWithChildren<{
  variant: keyof typeof ParagraphStylesMap;
  alertType?: keyof typeof TextColorsMap;
}>;
