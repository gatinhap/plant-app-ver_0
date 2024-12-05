import { Route } from 'react-router-dom';
import PublicRoute from '../authentication/PublicRoute.tsx';
import WelcomePage from '../pages/welcomePage/WelcomePage.tsx';
import UserRegistrationPage from '../pages/userRegistrationPage/UserRegistrationPage.tsx';
import LoginPage from '../pages/loginPage/LoginPage.tsx';
import AppPaths from '../config/appPaths.ts';

const PublicRoutes = (
  <Route element={<PublicRoute />}>
    <Route element={<WelcomePage />} path={AppPaths.Public.WelcomePage} />

    <Route element={<UserRegistrationPage />} path={AppPaths.Public.Register} />

    <Route element={<LoginPage />} path={AppPaths.Public.Login} />
  </Route>
);

export default PublicRoutes;
