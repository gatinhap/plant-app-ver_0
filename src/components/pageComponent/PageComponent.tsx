import ScrollToTop from "../scrollToTop/ScrollToTop.tsx";
import {theme} from "../../theme/theme.ts";
import {StyledPageComponent} from "./PageComponent.styles.ts";
import {PageComponentProps} from "./PageComponent.types.ts";

const PageComponent = ({ children }: PageComponentProps) => {
  return (
    <StyledPageComponent>
      {children}

            <ScrollToTop
                backgroundColor={theme.colors.lime}
            />
        </StyledPageComponent>
    )
}

export default PageComponent;
