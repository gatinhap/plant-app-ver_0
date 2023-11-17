import PlantNavItem from "./PlantNavItem.tsx";
import { PlantNavStyled } from "./PlantDetail.styles.ts";

const PlantNav = () => {
  return (
    <PlantNavStyled>
      <PlantNavItem
        linkTo={"/monstera/podlewanie"} //the path will have to be dynamic
      >
        podlewanie
      </PlantNavItem>
      <PlantNavItem linkTo={"/monstera/zraszanie"}>zraszanie</PlantNavItem>
      <PlantNavItem linkTo={"/monstera/światło"}>światło</PlantNavItem>
      <PlantNavItem linkTo={"/monstera/gleba"}>gleba</PlantNavItem>
      <PlantNavItem linkTo={"/monstera/nawożenie"}>nawożenie</PlantNavItem>
    </PlantNavStyled>
  );
};

export default PlantNav;
