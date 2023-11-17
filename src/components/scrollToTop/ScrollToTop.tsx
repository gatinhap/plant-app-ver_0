import { ScrollToTopStyled } from "./ScrollToTop.styles.ts";

const ScrollToTop = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return <ScrollToTopStyled onClick={scrollUp} />;
};

export default ScrollToTop;
