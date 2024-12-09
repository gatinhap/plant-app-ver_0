import { PropsWithChildren } from 'react';
import { ParagraphStylesMap, TextColorsMap } from './Text.constans.tsx';
import { createEnumObject } from '../../generics/enums.ts';

type ParagraphVariant = keyof typeof ParagraphStylesMap;
type ColorVariant = keyof typeof TextColorsMap;

export const ParagraphVariantEnum = createEnumObject<ParagraphVariant>({
  small: 'small',
  regular: 'regular',
  large: 'large',
});

export const ColorVariantEnum = createEnumObject<ColorVariant>({
  default: 'default',
  success: 'success',
  warning: 'warning',
});

export type TextTypes = PropsWithChildren<{
  variant: ParagraphVariant;
  color?: ColorVariant;
}>;
