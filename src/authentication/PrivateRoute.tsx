import { useAuth } from "./useAuth.ts";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = true;

  return token ? <Outlet /> : <Navigate to={"/welcome"} />;
};

export default PrivateRoute;
