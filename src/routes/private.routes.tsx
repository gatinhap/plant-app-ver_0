import { Navigate, Route } from 'react-router-dom';
import PrivateRoute from '../authentication/PrivateRoute.tsx';
import MyCollectionPage from '../pages/myCollectionPage/MyCollectionPage.tsx';
import AddNewPlant from '../pages/addNewPlantPage/AddNewPlant.tsx';
import PlantDetailPage from '../pages/plantDetailPage/PlantDetailPage.tsx';
import EditPlant from '../pages/editPlantPage/EditPlant.tsx';
import RemovePlant from '../pages/removePlantPage/RemovePlant.tsx';
import AppPaths from '../config/appPaths.ts';

const PrivateRoutes = (
  <Route element={<PrivateRoute />}>
    <Route
      element={<MyCollectionPage />}
      path={AppPaths.Private.PlantCollection}
    />

    <Route element={<AddNewPlant />} path={AppPaths.Private.AddNewPlant} />

    <Route
      element={<PlantDetailPage />}
      path={AppPaths.Private.PlantDetailPage}
    />

    <Route element={<EditPlant />} path={AppPaths.Private.EditPlant} />

    <Route element={<RemovePlant />} path={AppPaths.Private.RemovePlant} />

    <Route
      element={<Navigate replace to={AppPaths.Private.PlantCollection} />}
      path={AppPaths.Private.FallbackRoute}
    />
  </Route>
);

export default PrivateRoutes;
