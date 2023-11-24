import NavItem from "../navItem/NavItem.tsx";
import { PlantCollectionStyled } from "./PlantCollection.styles.ts";

const PlantCollection = () => {
  return (
    <PlantCollectionStyled>
      <NavItem linkTo={"/monstera/"}>monstera</NavItem>
      <NavItem linkTo={"/monstera"}>zamio</NavItem>
      <NavItem linkTo={"/monstera"}>grudnik</NavItem>
    </PlantCollectionStyled>
  );
};

export default PlantCollection;
