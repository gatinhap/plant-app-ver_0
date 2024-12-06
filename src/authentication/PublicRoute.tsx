import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth.ts';

const PublicRoute = () => {
  const token = useAuth();
  const redirectPath = '/';

  return token ? <Navigate to={redirectPath} /> : <Outlet />;
}

export default PublicRoute;
