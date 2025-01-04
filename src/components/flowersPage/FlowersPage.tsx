import { Card, Grid, Heading, Inset } from '@radix-ui/themes';
import Text from '../text/Text.tsx';
import { ParagraphVariantEnum } from '../text/Text.types.tsx';
import StaticText from '../plantCollection/PlantCollection.constants.ts';
import { useFlowerData } from '../../customHooks/useFlowerData.ts';
import { FlowerNameText } from './FlowersPage.styles.ts';

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
    <Grid
      columns={{ initial: '2', sm: '3', md: '4', lg: '6', xl: '8' }}
      gap="3"
    >
      {data.map((flower) => (
        <div>
          <Card key={flower.id} size="2">
            <Inset pb="current" side="top">
              <img
                alt={flower.name}
                src={flower.image}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Heading size="5">{flower.name}</Heading>
            <FlowerNameText>{flower.historicalSignificance}</FlowerNameText>
          </Card>
        </div>
      ))}
    </Grid>
  );
};

export default FlowersPage;
