import { StylesMap } from "./Text.constans.tsx";
import { TextStyled } from "./Text.styles.ts";

const Text = ({ variant = "small", children }) => {
  const variantStyles = StylesMap[variant];

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
