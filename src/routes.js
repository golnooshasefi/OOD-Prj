import Homepage from "./pages/Homepage";
import Survey from "./pages/Survey";
import AccountBox from "./pages/AccountBox";
import Products from "./pages/ProductPage/products";
import ShoppingList from "./pages/ShoppingList";
import SellerPanel from "./pages/SellerPanel/SellerPanelSidebar";

export const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/survey", element: <Survey /> },
  {
    path: "/accountbox",
    element: <AccountBox />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  { path: "/ShoppingList", element: <ShoppingList /> },

  // { path: "/SellerPanel", element: <SellerPanel /> },
];
