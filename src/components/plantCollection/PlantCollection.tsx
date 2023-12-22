import NavItem from "../navItem/NavItem.tsx";
import { PlantCollectionStyled } from "./PlantCollection.styles.ts";
import { pb, PLANTS_COLLECTION } from "../../Backend.constants.ts";
import { useQuery } from "@tanstack/react-query";
import Text from "../text/Text.tsx";

const PlantCollection = () => {
  const getPlantsList = async () => {
    const res = await pb.collection(PLANTS_COLLECTION).getList(1, 100);

    return res.items;
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["plants"],
    queryFn: getPlantsList,
  });

  if (isPending) {
    return <Text variant={"large"}>Loading...</Text>;
  }

  if (isError) {
    return <Text variant={"large"}>Error: {error.message}</Text>;
  }

  if (data) {
    return (
      <PlantCollectionStyled>
        {data.map((plant) => {
          return (
            <NavItem key={plant.id} linkTo={`/${plant.id}`}>
              {plant.plantName}
            </NavItem>
          );
        })}
      </PlantCollectionStyled>
    );
  }
};

export default PlantCollection;
