import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import HomePage from "../pages/homePage/HomePage";
import AllApps from "../pages/allApps/AllApps";

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
    ],
  },
]);
