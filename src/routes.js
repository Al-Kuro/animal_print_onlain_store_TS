import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import Item from "./pages/Item";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  HOME_ROUTE,
  ITEM_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: ITEM_ROUTE + "/:id",
    Component: Item,
  },
];
