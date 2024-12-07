import { Outlet, Route, Routes, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import NavItem from '../../components/navItem/NavItem.tsx';
import PlantInfo from '../../components/plantDetails/PlantInfo.tsx';
import Text from '../../components/text/Text.tsx';
import {
  PlantNavItemStyled,
  PlantNavStyled,
} from '../../components/plantDetails/PlantDetail.styles.ts';
import {
  pb,
  plantQueryKey,
  PLANTS_COLLECTION_ENDPOINT,
} from '../../Backend.constants.ts';
import CallToActionAsLink from '../../components/callToActionButton/CallToActionAsLink.tsx';
import { ParagraphVariantEnum } from '../../components/text/Text.types.tsx';

const PlantDetailPage = () => {
  const { plantId } = useParams();

  const getPlant = async (id: string | undefined) =>
    await pb.collection(PLANTS_COLLECTION_ENDPOINT).getOne(id!);

  const { isPending, isError, data } = useQuery({
    queryKey: [plantQueryKey, plantId],
    queryFn: () => getPlant(plantId),
  });

  if (isPending) {
    return <Text variant={ParagraphVariantEnum.large}>Pobieram dane...</Text>;
  }

  if (isError) {
    return (
      <Text variant={ParagraphVariantEnum.large}>
        Nie udało się pobrać danych. Spróbuj odświeżyć stronę.
      </Text>
    );
  }

  if (data) {
    return (
      <PageComponent>
        <NavItem linkTo="/" shouldDisplayOnTop>
          moja kolekcja
        </NavItem>

        <Outlet />

        {data ? (
          <>
            <h3>{data.plantName}</h3>

            <PlantNavStyled>
              <PlantNavItemStyled to={`/${plantId}/podlewanie`}>
                podlewanie
              </PlantNavItemStyled>

              <PlantNavItemStyled to={`/${plantId}/zraszanie`}>
                zraszanie
              </PlantNavItemStyled>

              <PlantNavItemStyled to={`/${plantId}/światło`}>
                światło
              </PlantNavItemStyled>

              <PlantNavItemStyled to={`/${plantId}/gleba`}>
                gleba
              </PlantNavItemStyled>

              <PlantNavItemStyled to={`/${plantId}/nawożenie`}>
                nawożenie
              </PlantNavItemStyled>
            </PlantNavStyled>

            {/* using Routes here will render components below nav, one at a time */}
            <Routes>
              <Route
                element={
                  <PlantInfo title="podlewanie">
                    <Text variant={ParagraphVariantEnum.regular}>
                      {data.watering}
                    </Text>
                  </PlantInfo>
                }
                path="/podlewanie"
              />

              <Route
                element={
                  <PlantInfo title="zraszanie">
                    <Text variant={ParagraphVariantEnum.regular}>
                      {data.misting}
                    </Text>
                  </PlantInfo>
                }
                path="/zraszanie"
              />

              <Route
                element={
                  <PlantInfo title="światło">
                    <Text variant={ParagraphVariantEnum.regular}>
                      {data.light}
                    </Text>
                  </PlantInfo>
                }
                path="/światło"
              />

              <Route
                element={
                  <PlantInfo title="gleba">
                    <Text variant={ParagraphVariantEnum.regular}>
                      {data.soil}
                    </Text>
                  </PlantInfo>
                }
                path="/gleba"
              />

              <Route
                element={
                  <PlantInfo title="nawożenie">
                    <Text variant={ParagraphVariantEnum.regular}>
                      {data.fertilization}
                    </Text>
                  </PlantInfo>
                }
                path="/nawożenie"
              />
            </Routes>
          </>
        ) : null}

        <CallToActionAsLink linkTo={`/${plantId}/edit`}>
          edytuj dane
        </CallToActionAsLink>

        <CallToActionAsLink linkTo={`/${plantId}/delete`}>
          usuń roślinkę z kolekcji
        </CallToActionAsLink>
      </PageComponent>
    );
  }
};

export default PlantDetailPage;
