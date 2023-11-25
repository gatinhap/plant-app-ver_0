import NavItem from "../navItem/NavItem.tsx";
import { PlantCollectionStyled } from "./PlantCollection.styles.ts";
import { FormValues } from "../form/Form.types.ts";

const PlantCollection = () => {
  const token = localStorage.getItem("formData");

  const plantsCollection: FormValues[] =
    (token && JSON.parse(localStorage.getItem("formData") || "")) || [];

  return (
    <PlantCollectionStyled>
      {plantsCollection.map((item) => {
        return (
          <NavItem key={item.plantID} linkTo={`/${item.plantName}`}>
            {item.plantName}
          </NavItem>
        );
      })}
    </PlantCollectionStyled>
  );
};

export default PlantCollection;
