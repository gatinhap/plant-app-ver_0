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
import AppPaths from '../../config/appPaths.ts';
import StaticText from '../pages.constants.ts';

const PlantDetailPage = () => {
  const { plantId } = useParams();
  const plantIdPath = `/${plantId}`;

  const getPlant = async (id: string | undefined) =>
    await pb.collection(PLANTS_COLLECTION_ENDPOINT).getOne(id!);

  const { isPending, isError, data } = useQuery({
    queryKey: [plantQueryKey, plantId],
    queryFn: () => getPlant(plantId),
  });

  if (isPending) {
    return (
      <Text variant="large">
        {StaticText.PLANT_DETAIL_PAGE.LOADING_DATA_IS_PENDING}
      </Text>
    );
  }

  if (isError) {
    return (
      <Text variant="large">
        {StaticText.PLANT_DETAIL_PAGE.LOADING_DATA_IS_ERROR}
      </Text>
    );
  }

  if (data) {
    return (
      <PageComponent>
        <NavItem linkTo={AppPaths.Private.PlantCollection} shouldDisplayOnTop>
          {StaticText.TOP_LINK}
        </NavItem>

        <Outlet />

        {data ? (
          <>
            <h3>{data.plantName}</h3>

            <PlantNavStyled>
              <PlantNavItemStyled
                to={plantIdPath + AppPaths.PlantDetails.Watering}
              >
                {StaticText.PLANT_DETAIL_PAGE.WATERING}
              </PlantNavItemStyled>

              <PlantNavItemStyled
                to={plantIdPath + AppPaths.PlantDetails.Misting}
              >
                {StaticText.PLANT_DETAIL_PAGE.MISTING}
              </PlantNavItemStyled>

              <PlantNavItemStyled
                to={plantIdPath + AppPaths.PlantDetails.Light}
              >
                {StaticText.PLANT_DETAIL_PAGE.LIGHT}
              </PlantNavItemStyled>

              <PlantNavItemStyled to={plantIdPath + AppPaths.PlantDetails.Soil}>
                {StaticText.PLANT_DETAIL_PAGE.SOIL}
              </PlantNavItemStyled>

              <PlantNavItemStyled
                to={plantIdPath + AppPaths.PlantDetails.Fertilization}
              >
                {StaticText.PLANT_DETAIL_PAGE.FERTILIZATION}
              </PlantNavItemStyled>
            </PlantNavStyled>

            {/* using Routes here will render components below nav, one at a time */}
            <Routes>
              <Route
                element={
                  <PlantInfo title={StaticText.PLANT_DETAIL_PAGE.WATERING}>
                    <Text variant="regular">{data.watering}</Text>
                  </PlantInfo>
                }
                path={AppPaths.PlantDetails.Watering}
              />

              <Route
                element={
                  <PlantInfo title={StaticText.PLANT_DETAIL_PAGE.MISTING}>
                    <Text variant="regular">{data.misting}</Text>
                  </PlantInfo>
                }
                path={AppPaths.PlantDetails.Misting}
              />

              <Route
                element={
                  <PlantInfo title={StaticText.PLANT_DETAIL_PAGE.LIGHT}>
                    <Text variant="regular">{data.light}</Text>
                  </PlantInfo>
                }
                path={AppPaths.PlantDetails.Light}
              />

              <Route
                element={
                  <PlantInfo title={StaticText.PLANT_DETAIL_PAGE.SOIL}>
                    <Text variant="regular">{data.soil}</Text>
                  </PlantInfo>
                }
                path={AppPaths.PlantDetails.Soil}
              />

              <Route
                element={
                  <PlantInfo title={StaticText.PLANT_DETAIL_PAGE.FERTILIZATION}>
                    <Text variant="regular">{data.fertilization}</Text>
                  </PlantInfo>
                }
                path={AppPaths.PlantDetails.Fertilization}
              />
            </Routes>
          </>
        ) : null}

        <CallToActionAsLink
          linkTo={plantIdPath + AppPaths.PlantDetails.EditData}
        >
          {StaticText.PLANT_DETAIL_PAGE.EDIT_PLANT_DETAILS_BUTTON}
        </CallToActionAsLink>

        <CallToActionAsLink
          linkTo={plantIdPath + AppPaths.PlantDetails.RemovePlant}
        >
          {StaticText.PLANT_DETAIL_PAGE.REMOVE_PLANT_LINK}
        </CallToActionAsLink>
      </PageComponent>
    );
  }
};

export default PlantDetailPage;
