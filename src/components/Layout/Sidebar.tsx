import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/Auth/authSlice";
import type React from "react"; // Added import for React

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  const user = useAppSelector(useCurrentUser);
  const role = user?.role;

  const userMenu = [
    { key: "1", label: "User Profile", path: "/dashboard/user/user-profile" },
    { key: "2", label: "My Orders", path: "/dashboard/user/orders" },
  ];

  const adminMenu = [
    { key: "1", label: "Manage Users", path: "/dashboard/admin/manage-users" },
    {
      key: "2",
      label: "Manage Products",
      path: "/dashboard/admin/manage-products",
    },
    {
      key: "3",
      label: "View Products",
      path: "/dashboard/admin/view-products",
    },
    { key: "4", label: "View Orders", path: "/dashboard/admin/view-orders" },
  ];

  const menuItems = role === "admin" ? adminMenu : userMenu;

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div 
        style={{
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         
          borderBottom: "1px solid #FFF",
          margin: "16px 0",
         
        }}
      >
        <Link to="/">
          <img
            className="h-8 w-8"
            src="https://i.ibb.co.com/Ykfzf8P/logo.png"
            alt=""
          />
        </Link>
      </div>
      <Menu theme="dark" mode="inline">
        {menuItems.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
