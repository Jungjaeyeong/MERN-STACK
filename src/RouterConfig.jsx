import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import { ROUTER_LINKS } from "./constant/data";

const A = lazy(() => import("./components/Header"));
const List = lazy(() => import("./components/Post/List"));
const Upload = lazy(() => import("./components/Post/Upload"));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: ROUTER_LINKS.HOME, element: <A /> },
    { path: ROUTER_LINKS.LIST, element: <List /> },
    { path: ROUTER_LINKS.UPLOAD, element: <Upload /> },
  ]);

  return routes;
};

export default RouterConfig;
