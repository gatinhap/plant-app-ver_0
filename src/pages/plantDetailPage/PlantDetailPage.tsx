import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import { theme } from "../../theme/theme.ts";
import plant from "../../assets/monstera.png";
import PlantImage from "../../components/plantDetails/PlantImage.tsx";
import PlantInfo from "../../components/plantDetails/PlantInfo.tsx";
import PlantNav from "../../components/plantDetails/PlantNav.tsx";
import { Route, Routes } from "react-router-dom";

const PlantDetailPage = () => {
  return (
    <PageComponent>
      <h3>Moja monsterka</h3>
      <PlantImage imgSrc={plant} isCustomImage={true} />
      <NavItem
        backgroundColor={theme.colors.lightGreen}
        color={theme.colors.mediumGreen}
        linkTo={"/"}
        shouldDisplay={true}
      >
        moja kolekcja
      </NavItem>
      <PlantNav />

      {/*using Routes here will render components below nav, one at a time*/}
      <Routes>
        <Route
          path={"/podlewanie"}
          element={
            <PlantInfo title={"podlewanie"}>
              jak podelwać moją roślinkę
            </PlantInfo>
          }
        />
        <Route
          path={"/zraszanie"}
          element={
            <PlantInfo title={"zraszanie"}>
              czy i jak często zraszać moją roślinkę
            </PlantInfo>
          }
        />
        <Route
          path={"/światło"}
          element={
            <PlantInfo title={"światło"}>
              jak dużo światła potrzebuje moją roślinkę
            </PlantInfo>
          }
        />
        <Route
          path={"/gleba"}
          element={
            <PlantInfo title={"gleba"}>
              jaka gleba jest najlepsza dla mojej roślinki
            </PlantInfo>
          }
        />
        <Route
          path={"/nawożenie"}
          element={
            <PlantInfo title={"nawożenie"}>
              jaki rodzaj nawozu i kiedy go używać, żeby moją roślinka rosła
              zdrowo
            </PlantInfo>
          }
        />
      </Routes>
    </PageComponent>
  );
};

export default PlantDetailPage;

//plant detail page will contain
//name
//image
//plant nav with all the plant nav items that are links to subpage displaying beneath it
