import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../authentication/PrivateRoute.tsx';
import MyCollectionPage from '../pages/myCollectionPage/MyCollectionPage.tsx';
import AddNewPlant from '../pages/addNewPlantPage/AddNewPlant.tsx';
import PlantDetailPage from '../pages/plantDetailPage/PlantDetailPage.tsx';
import EditPlant from '../pages/editPlantPage/EditPlant.tsx';
import RemovePlant from '../pages/removePlantPage/RemovePlant.tsx';
import PublicRoute from '../authentication/PublicRoute.tsx';
import WelcomePage from '../pages/welcomePage/WelcomePage.tsx';
import UserRegistrationPage from '../pages/userRegistrationPage/UserRegistrationPage.tsx';
import LoginPage from '../pages/loginPage/LoginPage.tsx';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<MyCollectionPage />} path="/" />

        <Route element={<AddNewPlant />} path="/dodaj-roślinkę" />

        <Route element={<PlantDetailPage />} path={'/:plantId/*'} />

        <Route element={<EditPlant />} path="/:plantId/edit" />

        <Route element={<RemovePlant />} path="/:plantId/delete" />

        <Route element={<Navigate replace to="/" />} path="*" />
      </Route>

      <Route element={<PublicRoute />}>
        <Route element={<WelcomePage />} path="/welcome" />

        <Route element={<UserRegistrationPage />} path="/registration" />

        <Route element={<LoginPage />} path="/login" />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
