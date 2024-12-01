import { ScrollToTopStyled } from './ScrollToTop.styles.ts';

function ScrollToTop() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return <ScrollToTopStyled onClick={scrollUp} role="button" />;
}

export default ScrollToTop;
