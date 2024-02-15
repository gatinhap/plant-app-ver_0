import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

const PublicRoute = () => {
  const token = useAuth();

  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
