import ScrollToTop from "../scrollToTop/ScrollToTop.tsx";
import {Color} from "../colors.ts";
import {StyledPageComponent} from "./PageComponent.styles.ts";
import {PageComponentProps} from "./PageComponent.types.ts";

const PageComponent = ({children}: PageComponentProps) => {

    return (
        <StyledPageComponent>
            {children}

            <ScrollToTop
                backgroundColor={Color.lime}
            />
        </StyledPageComponent>
    )
}

export default PageComponent;