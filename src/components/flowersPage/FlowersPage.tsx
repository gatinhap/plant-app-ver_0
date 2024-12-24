import Text from '../text/Text.tsx';
import { ParagraphVariantEnum } from '../text/Text.types.tsx';
import StaticText from '../plantCollection/PlantCollection.constants.ts';
import { useFlowerData } from '../../customHooks/useFlowerData.ts';

const FlowersPage = () => {
  const { data, isError, isPending } = useFlowerData();

  if (isPending) {
    return (
      <Text variant={ParagraphVariantEnum.large}>
        {StaticText.PLANT_DATA_DISPLAY_IS_PENDING}
      </Text>
    );
  }

  if (isError || !data) {
    return (
      <Text variant={ParagraphVariantEnum.large}>
        {StaticText.PLANT_DATA_DISPLAY_IS_ERROR}
      </Text>
    );
  }

  return (
    <>
      <h3>Flower schema component</h3>
      {data.map((flower) => (
        <h6 key={flower.name}>{flower.name}</h6>
      ))}
    </>
  );
};

export default FlowersPage;
