import NavItem from "../navItem/NavItem.tsx";
import { PlantCollectionStyled } from "./PlantCollection.styles.ts";
import { FormValues } from "../form/Form.types.ts";

const PlantCollection = () => {
  const formData = localStorage.getItem("plantsList");

  const plantsCollection = formData
    ? (JSON.parse(formData) as FormValues[])
    : [];

  return (
    <PlantCollectionStyled>
      {plantsCollection.map((item) => (
        <NavItem key={item.plantID} linkTo={`/${item.plantID}`}>
          {item.plantName}
        </NavItem>
      ))}
      )
    </PlantCollectionStyled>
  );
};

export default PlantCollection;
