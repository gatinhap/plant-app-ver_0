import ScrollToTopStyled from './ScrollToTop.styles.ts';

const ScrollToTop = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const scrollToTopElementRole = 'button';

  return <ScrollToTopStyled onClick={scrollUp} role={scrollToTopElementRole} />;
};

export default ScrollToTop;
