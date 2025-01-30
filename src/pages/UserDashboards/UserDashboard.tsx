import React from "react";
import { Outlet } from "react-router";

const UserDashboard: React.FC = () => {
  return (
    <div>
    
      <Outlet/>
    </div>
  );
};

export default UserDashboard;
