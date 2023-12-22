import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import PlantInfo from "../../components/plantDetails/PlantInfo.tsx";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Text from "../../components/text/Text.tsx";
import {
  PlantNavItemStyled,
  PlantNavStyled,
} from "../../components/plantDetails/PlantDetail.styles.ts";
import { pb, PLANTS_COLLECTION } from "../../Backend.constants.ts";
import { useQuery } from "react-query";

const PlantDetailPage = () => {
  const { plantId } = useParams();

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

  const currentPlant =
    data && data.find((singlePlant) => singlePlant.id === plantId);

  if (data) {
    return (
      <PageComponent>
        <NavItem linkTo={"/"} shouldDisplayOnTop={true}>
          moja kolekcja
        </NavItem>
        <Outlet />
        {currentPlant && (
          <>
            <h3>{currentPlant.plantName}</h3>

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
                    <Text variant={"regular"}>
                      {currentPlant.fertilization}
                    </Text>
                  </PlantInfo>
                }
              />
            </Routes>
          </>
        )}
      </PageComponent>
    );
  }
};

export default PlantDetailPage;
