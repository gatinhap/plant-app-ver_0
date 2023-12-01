import { Navigate, Route, Routes } from "react-router-dom";
import PlantDetailPage from "./pages/plantDetailPage/PlantDetailPage.tsx";
import MyCollectionPage from "./pages/myCollectionPage/MyCollectionPage.tsx";
import AddNewPlant from "./pages/addNewPlantPage/AddNewPlant.tsx";
import GlobalStyle from "./theme/globalStyles.ts";
import { theme } from "./theme/theme.ts";
import { ThemeProvider } from "styled-components";
import { FormValues } from "./components/form/Form.types.ts";

const App = () => {
  const formData = localStorage.getItem("plantsList");

  const plantsCollection = formData
    ? (JSON.parse(formData) as FormValues[])
    : [];

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path={"/"} element={<MyCollectionPage />} />
          <Route path={"/dodaj-roślinkę"} element={<AddNewPlant />} />

          {plantsCollection.map((item) => {
            return (
              <Route
                key={item.plantID}
                path={`/${item.plantName}/*`}
                element={<PlantDetailPage currentPlantId={item.plantID} />}
              />
            );
          })}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
