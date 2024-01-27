import React, { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

const RouteWithLayout = ({ layout: Layout, component: Component, path, index, ...rest }) => (
  <Layout>
    {index && <Navigate to={DEFAULT_PATH} replace />}
    <Loadable>
      <Component {...rest} />
    </Loadable>
  </Layout>
);

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          ...RouteWithLayout({
            layout: DashboardLayout,
            component: GeneralApp,
            path: "app",
          }),
        },
        {
          path: "404",
          element: <Loadable><Page404 /></Loadable>,
        },
        {
          path: "*",
          element: <Navigate to="/404" replace />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}

const GeneralApp = lazy(() => import("../pages/dashboard/GeneralApp"));
const Page404 = lazy(() => import("../pages/Page404"));
