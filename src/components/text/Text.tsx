import { ParagraphStylesMap } from "./Text.constans.tsx";
import { TextStyled } from "./Text.styles.ts";
import { TextTypes } from "./Text.types.tsx";

const Text = ({ variant = "small", children }: TextTypes) => {
  const variantStyles = ParagraphStylesMap[variant];

  return (
    <TextStyled
      $lineHeight={variantStyles.lineHeight}
      $fontSize={variantStyles.fontSize}
      $letterSpacing={variantStyles.letterSpacing}
    >
      {children}
    </TextStyled>
  );
};

export default Text;
