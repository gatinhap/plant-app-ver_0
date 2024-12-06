import theme from '../../theme/theme.ts';

export const ParagraphStylesMap = {
  small: {
    fontSize: theme.fontSizes.smallParagraph,
    lineHeight: theme.lineHeight.smallParagraph,
    letterSpacing: theme.letterSpacing.smallParagraph,
  },
  regular: {
    fontSize: theme.fontSizes.regularParagraph,
    lineHeight: theme.lineHeight.regularParagraph,
    letterSpacing: theme.letterSpacing.regularParagraph,
  },
  large: {
    fontSize: theme.fontSizes.largeParagraph,
    lineHeight: theme.lineHeight.largeParagraph,
    letterSpacing: theme.letterSpacing.largeParagraph,
  },
};

export const TextColorsMap = {
  warning: theme.colors.red,
  success: theme.colors.lightGreen,
  default: theme.colors.cream,
};
