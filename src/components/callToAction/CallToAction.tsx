import {CallToActionStyled} from "./CallToAction.styles.ts";
import {CallToActionProps} from "./CallToAction.types.ts";

const CallToAction = (
    {
        children,
        backgroundColor,
        color,
        handleClick,
    }: CallToActionProps) => {

    return (
        <CallToActionStyled
            $backgroundColor={backgroundColor}
            $color={color}
            onClick={handleClick}
        >
            {children}
        </CallToActionStyled>
    )
}

export default CallToAction;