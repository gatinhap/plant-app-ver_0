import ScrollToTop from '../scrollToTop/ScrollToTop.tsx';
import StyledPageComponent from './PageComponent.styles.ts';
import { PageComponentProps } from './PageComponent.types.ts';

const PageComponent = ({ children }: PageComponentProps) => (
  <StyledPageComponent>
    {children}

    <ScrollToTop />
  </StyledPageComponent>
);

export default PageComponent;
