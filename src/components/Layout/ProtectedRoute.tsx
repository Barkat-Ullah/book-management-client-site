import { ReactNode } from "react";
import {

  useCurrentToken,
  useCurrentUser,
} from "../../redux/features/Auth/authSlice";

import { Navigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";

type TProtectedRoute = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(useCurrentUser);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
