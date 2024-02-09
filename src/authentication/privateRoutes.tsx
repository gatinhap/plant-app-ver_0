import { useAuth } from "./useAuth.ts";
import { Navigate, Outlet } from "react-router-dom";
import * as React from "react";

const PrivateRoutes: React.FC = () => {
  const token = useAuth();

  return token ? <Outlet /> : <Navigate to={"/welcome"} />;
};

export default PrivateRoutes;
