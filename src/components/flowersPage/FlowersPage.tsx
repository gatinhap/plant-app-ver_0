/* eslint-disable react/jsx-no-literals */

import { Card, Grid, Heading, Inset } from '@radix-ui/themes';
import { useState } from 'react';
import Text from '../text/Text.tsx';
import { ParagraphVariantEnum } from '../text/Text.types.tsx';
import StaticText from '../plantCollection/PlantCollection.constants.ts';
import { useFlowerData } from '../../customHooks/useFlowerData.ts';
import {
  FlowerNameText,
  StyledPaginationComponent,
} from './FlowersPage.styles.ts';
import MuiThemeWrapper from '../../theme_mui/MuiThemeWrapper.tsx';
import { paginate } from '../../utils/pagination.ts';
import { FlowerSchemaType } from './FlowersPage.types.ts';

const FlowersPage = () => {
  const { data, isError, isPending } = useFlowerData();
  const [currentPage, setCurrentPage] = useState(1);

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

  const paginatedData = paginate(data, 8);
  const currentData: FlowerSchemaType['items'] | undefined =
    paginatedData[currentPage - 1];

  return (
    <>
      <MuiThemeWrapper>
        <StyledPaginationComponent
          color="secondary"
          count={paginatedData.length}
          onChange={(_, newPage) => setCurrentPage(newPage)}
          page={currentPage}
        />
      </MuiThemeWrapper>
      <Grid columns={{ initial: '2', sm: '3', md: '4' }} gap="3">
        {currentData?.map((flower) => (
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
        ))}
      </Grid>
    </>
  );
};

export default FlowersPage;
