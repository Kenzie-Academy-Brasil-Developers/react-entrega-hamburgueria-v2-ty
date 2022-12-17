import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export function ProtectedRoutes() {

  const { loadUserLoading, user } = useContext(UserContext);

  if (loadUserLoading) {
    
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}
