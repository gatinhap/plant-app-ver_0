import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../authentication/PrivateRoute.tsx";
import MyCollectionPage from "../pages/myCollectionPage/MyCollectionPage.tsx";
import AddNewPlant from "../pages/addNewPlantPage/AddNewPlant.tsx";
import PlantDetailPage from "../pages/plantDetailPage/PlantDetailPage.tsx";
import EditPlant from "../pages/editPlantPage/EditPlant.tsx";
import RemovePlant from "../pages/removePlantPage/RemovePlant.tsx";
import PublicRoute from "../authentication/PublicRoute.tsx";
import WelcomePage from "../pages/welcomePage/WelcomePage.tsx";
import UserRegistrationPage from "../pages/userRegistrationPage/UserRegistrationPage.tsx";
import LoginPage from "../pages/loginPage/LoginPage.tsx";

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;
