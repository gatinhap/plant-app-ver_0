import {PlantNavItemStyled} from "./PlantDetail.styles.ts";
import {PlantNavItemProps} from "./PlantDetail.types.ts";

const PlantNavItem = (
    {
        children,
        linkTo,
        backgroundColor,
        color,
    }: PlantNavItemProps) => {

    return (
        <PlantNavItemStyled
            to={linkTo}
            $backgroundColor={backgroundColor}
            $color={color}
        >
            {children}
        </PlantNavItemStyled>
    )
}

export default PlantNavItem;