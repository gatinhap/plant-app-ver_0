import PlantNavItem from "./PlantNavItem.tsx";
import { Color } from "../colors.ts";
import { PlantNavStyled } from "./PlantDetail.styles.ts";

const PlantNav = () => {
  return (
    <PlantNavStyled>
      <PlantNavItem
        backgroundColor={Color.lightGreen}
        color={Color.mediumGreen}
        linkTo={"/monstera/podlewanie"} //the path will have to be dynamic
      >
        podlewanie
      </PlantNavItem>
      <PlantNavItem
        backgroundColor={Color.lightGreen}
        color={Color.mediumGreen}
        linkTo={"/monstera/zraszanie"}
      >
        zraszanie
      </PlantNavItem>
      <PlantNavItem
        backgroundColor={Color.lightGreen}
        color={Color.mediumGreen}
        linkTo={"/monstera/światło"}
      >
        światło
      </PlantNavItem>
      <PlantNavItem
        backgroundColor={Color.lightGreen}
        color={Color.mediumGreen}
        linkTo={"/monstera/gleba"}
      >
        gleba
      </PlantNavItem>
      <PlantNavItem
        backgroundColor={Color.lightGreen}
        color={Color.mediumGreen}
        linkTo={"/monstera/nawożenie"}
      >
        nawożenie
      </PlantNavItem>
    </PlantNavStyled>
  );
};

export default PlantNav;
