import NavItem from "../navItem/NavItem.tsx";
import {Color} from "../colors.ts";
import {PlantCollectionStyled} from "./PlantCollection.styles.ts";

const PlantCollection = () => {
    return (
        <PlantCollectionStyled>
            <NavItem
                backgroundColor={Color.lightGreen}
                color={Color.mediumGreen}
                linkTo={'/monstera/'}
            >
                monstera
            </NavItem>
            <NavItem
                backgroundColor={Color.lightGreen}
                color={Color.mediumGreen}
                linkTo={'/monstera'}
            >
                zamio
            </NavItem>
            <NavItem
                backgroundColor={Color.lightGreen}
                color={Color.mediumGreen}
                linkTo={'/monstera'}
            >
                grudnik
            </NavItem>
        </PlantCollectionStyled>
    )
}

export default PlantCollection;