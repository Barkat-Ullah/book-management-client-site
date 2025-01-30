import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import Product from "../pages/Product";
import ProductCard from "../pages/ProductCard";
import Cart from "../pages/Cart";
import VerifyOrder from "../pages/VerifyOrder";
import Contact from "../pages/Contact";
import About from "../pages/about/About";
import ProtectedRoute from "../components/Layout/ProtectedRoute";
import MainLayout from "../components/Layout/MainLayout";
import UserDashboard from "../pages/UserDashboards/UserDashboard";
import AdminRoute from "../components/Layout/AdminRoute";
import AdminDashboard from "../pages/AdminDashboards/AdminDashboard";
import AdminManageUsers from "../pages/AdminDashboards/AdminManageUsers";
import AdminManageProducts from "../pages/AdminDashboards/AdminManageProducts";
import AdminManageOrders from "../pages/AdminDashboards/AdminManageOrders";
import AdminManageBook from "../pages/AdminDashboards/AdminManageBook";
import UserProfile from "../pages/UserDashboards/UserProfile";
import UserOrder from "../pages/UserDashboards/UserOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "products/:id",
        element: (
          <ProtectedRoute>
            <ProductCard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/orders/verify",
        element: (
          <ProtectedRoute>
            <VerifyOrder />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "user",
        element: <UserDashboard />,
        children: [
          { path: "user-profile", element: <UserProfile /> },
          { path: "orders", element: <UserOrder /> },
        ],
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
        children: [
          { path: "manage-users", element: <AdminManageUsers /> },
          { path: "manage-products", element: <AdminManageProducts /> },
          { path: "view-products", element: <AdminManageBook /> },
          { path: "view-orders", element: <AdminManageOrders /> },
        ],
      },
    ],
  },
]);

export default router;
