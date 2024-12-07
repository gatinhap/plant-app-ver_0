import { PropsWithChildren } from 'react';
import { ParagraphStylesMap, TextColorsMap } from './Text.constans.tsx';
import { createEnumObject } from '../../generics/enums.ts';

type ColorVariant = keyof typeof TextColorsMap;
type ParagraphVariant = keyof typeof ParagraphStylesMap;

export const ColorVariantEnum = createEnumObject<ColorVariant>({
  default: 'default',
  success: 'success',
  warning: 'warning',
});

export const ParagraphVariantEnum = createEnumObject<ParagraphVariant>({
  large: 'large',
  regular: 'regular',
  small: 'small',
});

export type TextTypes = PropsWithChildren<{
  variant: ParagraphVariant;
  color?: ColorVariant;
}>;
