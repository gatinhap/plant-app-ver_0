import { ParagraphStylesMap } from "./Text.constans.tsx";
import { WarningTextStyled } from "./Text.styles.ts";
import { TextTypes } from "./Text.types.tsx";

const WarningText = ({ variant = "small", children }: TextTypes) => {
  const variantStyles = ParagraphStylesMap[variant];

  return (
    <WarningTextStyled
      $lineHeight={variantStyles.lineHeight}
      $fontSize={variantStyles.fontSize}
      $letterSpacing={variantStyles.letterSpacing}
    >
      {children}
    </WarningTextStyled>
  );
};

export default WarningText;
