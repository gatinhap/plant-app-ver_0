import { Navigate, Route, Routes } from "react-router-dom";
import PlantDetailPage from "./pages/plantDetailPage/PlantDetailPage.tsx";
import MyCollectionPage from "./pages/myCollectionPage/MyCollectionPage.tsx";
import AddNewPlant from "./pages/addNewPlantPage/AddNewPlant.tsx";
import GlobalStyle from "./theme/globalStyles.ts";
import { theme } from "./theme/theme.ts";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";
import { StyledToastContainer } from "./components/toast/Toast.styles.ts";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path={"/"} element={<MyCollectionPage />} />
          <Route path={"/dodaj-roślinkę"} element={<AddNewPlant />} />
          <Route path={"/:plantId/*"} element={<PlantDetailPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <StyledToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
