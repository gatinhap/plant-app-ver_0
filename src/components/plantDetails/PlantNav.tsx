import PlantNavItem from "./PlantNavItem.tsx";
import { theme } from "../../theme/theme.ts";
import { PlantNavStyled } from "./PlantDetail.styles.ts";

const PlantNav = () => {
  return (
    <PlantNavStyled>
      <PlantNavItem
        backgroundColor={theme.colors.lightGreen}
        color={theme.colors.mediumGreen}
        linkTo={"/monstera/podlewanie"} //the path will have to be dynamic
      >
        podlewanie
      </PlantNavItem>
      <PlantNavItem
        backgroundColor={theme.colors.lightGreen}
        color={theme.colors.mediumGreen}
        linkTo={"/monstera/zraszanie"}
      >
        zraszanie
      </PlantNavItem>
      <PlantNavItem
        backgroundColor={theme.colors.lightGreen}
        color={theme.colors.mediumGreen}
        linkTo={"/monstera/światło"}
      >
        światło
      </PlantNavItem>
      <PlantNavItem
        backgroundColor={theme.colors.lightGreen}
        color={theme.colors.mediumGreen}
        linkTo={"/monstera/gleba"}
      >
        gleba
      </PlantNavItem>
      <PlantNavItem
        backgroundColor={theme.colors.lightGreen}
        color={theme.colors.mediumGreen}
        linkTo={"/monstera/nawożenie"}
      >
        nawożenie
      </PlantNavItem>
    </PlantNavStyled>
  );
};

export default PlantNav;
