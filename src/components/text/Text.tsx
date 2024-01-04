import { ParagraphStylesMap, TextColorsMap } from "./Text.constans.tsx";
import { TextStyled } from "./Text.styles.ts";
import { TextTypes } from "./Text.types.tsx";

const Text = ({
  variant = "small",
  color = "default",
  children,
}: TextTypes) => {
  const variantStyles = ParagraphStylesMap[variant];
  const colors = TextColorsMap[color];

  return (
    <TextStyled
      $lineHeight={variantStyles.lineHeight}
      $fontSize={variantStyles.fontSize}
      $letterSpacing={variantStyles.letterSpacing}
      $color={colors}
    >
      {children}
    </TextStyled>
  );
};

export default Text;
