import { useQuery } from '@tanstack/react-query';
import NavItem from '../navItem/NavItem.tsx';
import PlantCollectionStyled from './PlantCollection.styles.ts';
import {
  pb,
  plantQueryKey,
  PLANTS_COLLECTION_ENDPOINT,
} from '../../Backend.constants.ts';
import Text from '../text/Text.tsx';
import StaticText from './PlantCollection.constants.ts';

const PlantCollection = () => {
  const currentUserId = pb.authStore.model?.id;

  const getPlantsList = async () => {
    const res = await pb
      .collection(PLANTS_COLLECTION_ENDPOINT)
      .getList(1, 100, {
        filter: `user = "${currentUserId}"`,
      });

    return res.items;
  };

  const { isPending, isError, data } = useQuery({
    queryKey: [plantQueryKey],
    queryFn: getPlantsList,
  });

  if (isPending) {
    return (
      <Text variant="large">{StaticText.PLANT_DATA_DISPLAY_IS_PENDING}</Text>
    );
  }

  if (isError) {
    return (
      <Text variant="large">{StaticText.PLANT_DATA_DISPLAY_IS_ERROR}</Text>
    );
  }

  if (data) {
    return (
      <PlantCollectionStyled>
        {data.map((plant) => (
          <NavItem key={plant.id} linkTo={`/${plant.id}`}>
            {plant.plantName}
          </NavItem>
        ))}
      </PlantCollectionStyled>
    );
  }
};

export default PlantCollection;
