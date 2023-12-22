import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import PlantInfo from "../../components/plantDetails/PlantInfo.tsx";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Text from "../../components/text/Text.tsx";
import { FormValues } from "../../components/form/Form.types.ts";
import {
  PlantNavItemStyled,
  PlantNavStyled,
} from "../../components/plantDetails/PlantDetail.styles.ts";

const PlantDetailPage = () => {
  const plantsCollection: FormValues[] =
    JSON.parse(localStorage.getItem("plantsList") || "") || [];

  const { plantId } = useParams();

  const currentPlantId = plantsCollection.find(
    (singlePlant) => singlePlant.id === plantId,
  );

  return (
    <PageComponent>
      <NavItem linkTo={"/"} shouldDisplayOnTop={true}>
        moja kolekcja
      </NavItem>
      <Outlet />
      {currentPlantId && (
        <>
          <h3>{currentPlantId.plantName}</h3>

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

          {/*using Routes here will render components below nav, one at a time*/}
          <Routes>
            <Route
              path={"/podlewanie"}
              element={
                <PlantInfo title={"podlewanie"}>
                  <Text variant={"regular"}>{currentPlantId.watering}</Text>
                </PlantInfo>
              }
            />

            <Route
              path={"/zraszanie"}
              element={
                <PlantInfo title={"zraszanie"}>
                  <Text variant={"regular"}>{currentPlantId.misting}</Text>
                </PlantInfo>
              }
            />

            <Route
              path={"/światło"}
              element={
                <PlantInfo title={"światło"}>
                  <Text variant={"regular"}>{currentPlantId.light}</Text>
                </PlantInfo>
              }
            />

            <Route
              path={"/gleba"}
              element={
                <PlantInfo title={"gleba"}>
                  <Text variant={"regular"}>{currentPlantId.soil}</Text>
                </PlantInfo>
              }
            />

            <Route
              path={"/nawożenie"}
              element={
                <PlantInfo title={"nawożenie"}>
                  <Text variant={"regular"}>
                    {currentPlantId.fertilization}
                  </Text>
                </PlantInfo>
              }
            />
          </Routes>
        </>
      )}
    </PageComponent>
  );
};

export default PlantDetailPage;
