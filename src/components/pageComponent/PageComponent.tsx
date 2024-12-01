import ScrollToTop from '../scrollToTop/ScrollToTop.tsx';
import { StyledPageComponent } from './PageComponent.styles.ts';
import { PageComponentProps } from './PageComponent.types.ts';

function PageComponent({ children }: PageComponentProps) {
  return (
    <StyledPageComponent>
      {children}

      <ScrollToTop />
    </StyledPageComponent>
  );
}

export default PageComponent;
