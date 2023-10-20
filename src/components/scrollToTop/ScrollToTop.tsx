import { ScrollToTopStyled } from "./ScrollToTop.styles.ts";
import { ScrollToTopProps } from "./ScrollToTop.types.ts";

const ScrollToTop = ({ backgroundColor }: ScrollToTopProps) => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <ScrollToTopStyled $backgroundColor={backgroundColor} onClick={scrollUp} />
  );
};

export default ScrollToTop;
