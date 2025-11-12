import { Navigate } from "react-router-dom";

export default function AdminPrivateRoute({ children }) {
  const isAdminLoggedIn = localStorage.getItem("isAdmin") === "true";

  return isAdminLoggedIn ? children : <Navigate to="/admin/login" replace />;
}
