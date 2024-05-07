import { ScrollToTopStyled } from "./ScrollToTop.styles.ts";

const ScrollToTop = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return <ScrollToTopStyled role="button" onClick={scrollUp} />;
};

export default ScrollToTop;
