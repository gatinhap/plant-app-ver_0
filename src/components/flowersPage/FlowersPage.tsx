/* eslint-disable react/jsx-no-literals */

import { Card, Grid, Heading, Inset } from '@radix-ui/themes';
import { ChangeEvent, SetStateAction, useState } from 'react';
import Text from '../text/Text.tsx';
import { ParagraphVariantEnum } from '../text/Text.types.tsx';
import StaticText from '../plantCollection/PlantCollection.constants.ts';
import { useFlowerData } from '../../customHooks/useFlowerData.ts';
import {
  FlowerNameText,
  StyledImage,
  StyledPaginationComponent,
} from './FlowersPage.styles.ts';
import MuiThemeWrapper from '../../theme_mui/MuiThemeWrapper.tsx';
import { paginate } from '../../utils/pagination.ts';
import { FlowersArrayType } from './FlowersPage.types.ts';

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

  const currentData: FlowersArrayType | undefined =
    paginatedData[currentPage - 1];

  const onCurrentPageStart = (
    _: ChangeEvent<unknown>,
    newPage: SetStateAction<number>,
  ) => setCurrentPage(newPage);

  return (
    <>
      <MuiThemeWrapper>
        <StyledPaginationComponent
          color="secondary"
          count={paginatedData.length}
          onChange={onCurrentPageStart}
          page={currentPage}
        />
      </MuiThemeWrapper>
      <Grid columns={{ initial: '2', sm: '3', md: '4' }} gap="3">
        {currentData?.map(({ id, name, image, historicalSignificance }) => (
          <Card key={id} size="2">
            <Inset pb="current" side="top">
              <StyledImage alt={name} src={image} />
            </Inset>
            <Heading size="5">{name}</Heading>
            <FlowerNameText>{historicalSignificance}</FlowerNameText>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default FlowersPage;
