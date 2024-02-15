import { Navigate, Route, Routes } from "react-router-dom";
import PlantDetailPage from "./pages/plantDetailPage/PlantDetailPage.tsx";
import MyCollectionPage from "./pages/myCollectionPage/MyCollectionPage.tsx";
import AddNewPlant from "./pages/addNewPlantPage/AddNewPlant.tsx";
import GlobalStyle from "./theme/globalStyles.ts";
import { theme } from "./theme/theme.ts";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";
import { StyledToastContainer } from "./components/toast/Toast.styles.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EditPlant from "./pages/editPlantPage/EditPlant.tsx";
import RemovePlant from "./pages/removePlantPage/RemovePlant.tsx";
import UserRegistrationPage from "./pages/userRegistrationPage/UserRegistrationPage.tsx";
import LoginPage from "./pages/loginPage/LoginPage.tsx";
import PrivateRoute from "./authentication/PrivateRoute.tsx";
import PublicRoute from "./authentication/PublicRoute.tsx";
import WelcomePage from "./pages/welcomePage/WelcomePage.tsx";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path={"/"} element={<MyCollectionPage />} />
            <Route path={"/dodaj-roślinkę"} element={<AddNewPlant />} />
            <Route path={"/:plantId/*"} element={<PlantDetailPage />} />
            <Route path={"/:plantId/edit"} element={<EditPlant />} />
            <Route path={"/:plantId/delete"} element={<RemovePlant />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path={"/welcome"} element={<WelcomePage />} />
            <Route path={"/registration"} element={<UserRegistrationPage />} />
            <Route path={"/login"} element={<LoginPage />} />
          </Route>
        </Routes>
        <StyledToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
