import { Navigate } from "react-router";
import { useCurrentUser } from "../../redux/features/Auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { ReactNode } from "react";
type TProtectedRoute = {
  children: ReactNode;
};
const AdminRoute = ({ children }: TProtectedRoute) => {
  const user = useAppSelector(useCurrentUser);

  if (user?.role !== "admin") {
    return <Navigate to="/dashboard/user" />;
  }

  return children;
};

export default AdminRoute;
