import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import PlantInfo from "../../components/plantDetails/PlantInfo.tsx";
import { Route, Routes } from "react-router-dom";
import Text from "../../components/text/Text.tsx";
import { FormValues } from "../../components/form/Form.types.ts";
import { PlantNavStyled } from "../../components/plantDetails/PlantDetail.styles.ts";
import PlantNavItem from "../../components/plantDetails/PlantNavItem.tsx";
import { PlantDetailPageProps } from "./PlantDetailPage.types.ts";

const PlantDetailPage = ({ currentPlantId }: PlantDetailPageProps) => {
  const plantsCollection: FormValues[] =
    JSON.parse(localStorage.getItem("plantsList") || "") || [];

  const currentPlant = plantsCollection.find(
    (singlePlant) => singlePlant.plantID === currentPlantId,
  );

  return (
    <PageComponent>
      <NavItem linkTo={"/"} shouldDisplayOnTop={true}>
        moja kolekcja
      </NavItem>
      {currentPlant && (
        <div>
          <h3>{currentPlant.plantName}</h3>

          <PlantNavStyled>
            <PlantNavItem linkTo={`/${currentPlant.plantName}/podlewanie`}>
              podlewanie
            </PlantNavItem>
            <PlantNavItem linkTo={`/${currentPlant.plantName}/zraszanie`}>
              zraszanie
            </PlantNavItem>
            <PlantNavItem linkTo={`/${currentPlant.plantName}/światło`}>
              światło
            </PlantNavItem>
            <PlantNavItem linkTo={`/${currentPlant.plantName}/gleba`}>
              gleba
            </PlantNavItem>
            <PlantNavItem linkTo={`/${currentPlant.plantName}/nawożenie`}>
              nawożenie
            </PlantNavItem>
          </PlantNavStyled>

          {/*using Routes here will render components below nav, one at a time*/}
          <Routes>
            <Route
              path={"/podlewanie"}
              element={
                <PlantInfo title={"podlewanie"}>
                  <Text variant={"regular"}>{currentPlant.watering}</Text>
                </PlantInfo>
              }
            />

            <Route
              path={"/zraszanie"}
              element={
                <PlantInfo title={"zraszanie"}>
                  <Text variant={"regular"}>{currentPlant.misting}</Text>
                </PlantInfo>
              }
            />

            <Route
              path={"/światło"}
              element={
                <PlantInfo title={"światło"}>
                  <Text variant={"regular"}>{currentPlant.light}</Text>
                </PlantInfo>
              }
            />

            <Route
              path={"/gleba"}
              element={
                <PlantInfo title={"gleba"}>
                  <Text variant={"regular"}>{currentPlant.soil}</Text>
                </PlantInfo>
              }
            />

            <Route
              path={"/nawożenie"}
              element={
                <PlantInfo title={"nawożenie"}>
                  <Text variant={"regular"}>{currentPlant.fertilization}</Text>
                </PlantInfo>
              }
            />
          </Routes>
        </div>
      )}
    </PageComponent>
  );
};

export default PlantDetailPage;
