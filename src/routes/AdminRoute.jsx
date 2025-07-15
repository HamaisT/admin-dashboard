import { Navigate } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";

const AdminRoute = ({ children }) => {
  const role = useUserRole();

  if (role === null) return null; // loading
  if (role !== "admin") return <Navigate to="/dashboard" />;

  return children;
};

export default AdminRoute;
