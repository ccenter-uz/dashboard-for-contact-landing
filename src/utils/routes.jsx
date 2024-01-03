/* eslint-disable react-refresh/only-export-components */
import Cookies from "js-cookie";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorBoundary from "src/pages/Error";
import { route } from "src/service/helpers/route";

// lazy imports
const Login = lazy(() => import(`src/components/Auth/Login`));
const Layout = lazy(() => import(`src/root/MainRoot`));

// Protector
const Protector = ({ children }) => {
  const token = Cookies.get("access_token");

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

// routes
export const routes = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <Protector>
        <Layout />
      </Protector>
    ),
    children: route.map((item, index) => {
      return {
        key: index,
        index: item.index,
        path: item.path,
        element: item.element,
      };
    }),
    errorElement: <ErrorBoundary />,
  },
]);
