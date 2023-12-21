import NavItem from "../navItem/NavItem.tsx";
import { PlantCollectionStyled } from "./PlantCollection.styles.ts";
import { useEffect, useState } from "react";
import { pb, PLANTS_COLLECTION } from "../../Backend.constants.ts";
import { FormValues } from "../form/Form.types.ts";

const PlantCollection = () => {
  const [plantsCollection, setPlantsCollection] = useState<FormValues[] | []>(
    [],
  );

  useEffect(() => {
    pb.collection(PLANTS_COLLECTION)
      .getList<FormValues>(1, 100)
      .then((result) => setPlantsCollection(result.items));
    console.log(plantsCollection);
  }, []);

  return (
    <PlantCollectionStyled>
      {plantsCollection.map((item) => {
        return (
          <NavItem key={item.id} linkTo={`/${item.plantName}`}>
            {item.plantName}
          </NavItem>
        );
      })}
    </PlantCollectionStyled>
  );
};

export default PlantCollection;
