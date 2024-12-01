import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth.ts';

function PrivateRoute() {
  const token = useAuth();
  const redirectPath = '/welcome';

  return token ? <Outlet /> : <Navigate to={redirectPath} />;
}

export default PrivateRoute;
