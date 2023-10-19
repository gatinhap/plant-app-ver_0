import NavItem from "../navItem/NavItem.tsx";
import {theme} from "../../theme/theme.ts";
import {PlantCollectionStyled} from "./PlantCollection.styles.ts";

const PlantCollection = () => {
    return (
        <PlantCollectionStyled>
            <NavItem
                backgroundColor={theme.colors.lightGreen}
                color={theme.colors.mediumGreen}
                linkTo={'/monstera/'}
            >
                monstera
            </NavItem>
            <NavItem
                backgroundColor={theme.colors.lightGreen}
                color={theme.colors.mediumGreen}
                linkTo={'/monstera'}
            >
                zamio
            </NavItem>
            <NavItem
                backgroundColor={theme.colors.lightGreen}
                color={theme.colors.mediumGreen}
                linkTo={'/monstera'}
            >
                grudnik
            </NavItem>
        </PlantCollectionStyled>
    )
}

export default PlantCollection;
