import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<h1>Registro</h1>} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
