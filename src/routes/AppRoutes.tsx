import { Routes } from 'react-router-dom';
import PublicRoutes from './public.routes.tsx';
import PrivateRoutes from './private.routes.tsx';

const AppRoutes = () => (
  <Routes>
    {PrivateRoutes}
    {PublicRoutes}
  </Routes>
);

export default AppRoutes;
