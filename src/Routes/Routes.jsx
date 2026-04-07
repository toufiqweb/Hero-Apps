import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import HomePage from "../pages/homePage/HomePage";
import AllApps from "../pages/allApps/AllApps";
import Installation from "../pages/Installation/Installation";
import ErrorPage from "../pages/errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
