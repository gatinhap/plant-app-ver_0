import { Navigate, Route, Routes } from "react-router-dom";
import PlantDetailPage from "./pages/plantDetailPage/PlantDetailPage.tsx";
import MyCollectionPage from "./pages/myCollectionPage/MyCollectionPage.tsx";
import AddNewPlant from "./pages/addNewPlantPage/AddNewPlant.tsx";
import GlobalStyle from "./theme/globalStyles.ts";
import { theme } from "./theme/theme.ts";
import { ThemeProvider } from "styled-components";
import { FormValues } from "./components/form/Form.types.ts";
import "react-toastify/dist/ReactToastify.min.css";
import { StyledToastContainer } from "./components/toast/Toast.styles.ts";

const App = () => {
  const token = localStorage.getItem("formData");

  const plantsCollection: FormValues[] =
    (token && JSON.parse(localStorage.getItem("formData") || "")) || [];

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
        <StyledToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
