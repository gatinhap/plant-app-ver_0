import { ParagraphStylesMap, TextColorsMap } from "./Text.constans.tsx";
import { TextStyled } from "./Text.styles.ts";
import { TextTypes } from "./Text.types.tsx";

const Text = ({
  variant = "small",
  alertType = "default",
  children,
}: TextTypes) => {
  const variantStyles = ParagraphStylesMap[variant];
  const alertTypeStyles = TextColorsMap[alertType];

  return (
    <TextStyled
      $lineHeight={variantStyles.lineHeight}
      $fontSize={variantStyles.fontSize}
      $letterSpacing={variantStyles.letterSpacing}
      $color={alertTypeStyles}
    >
      {children}
    </TextStyled>
  );
};

export default Text;
