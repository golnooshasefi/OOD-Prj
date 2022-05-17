import Homepage from "./pages/Homepage";
import Survey from "./pages/Survey";
import AccountBox from "./pages/AccountBox";
import SellerAccountBox from "./pages/SellerAccountBox";
import Products from "./pages/ProductsList/products";
import ShoppingList from "./pages/ShoppingList";
import Product from "./pages/Product";
import SellerPanelSidebar from "./pages/SellerPanel/SellerPanelSidebar";
import SellerPanel from "./pages/SellerPanel";
// import SellerLogin from "./pages/SellerLogin";
import FAQ from "./pages/FAQ";
import AddProduct from "./pages/SellerPanel/AddProduct";
import EditProduct from "./pages/SellerPanel/EditProduct";

export const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/survey", element: <Survey /> },
  {
    path: "/accountbox",
    element: <AccountBox />,
  },
  {
    path: "/SellerAccountbox",
    element: <SellerAccountBox />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  { path: "/ShoppingList", element: <ShoppingList /> },
  { path: "/product", element: <Product /> },
  {
    path: "/SellerPanel",
    element: <SellerPanelSidebar />,
    children: [
      { path: "/SellerPanel/add-product", element: <AddProduct /> },
      { path: "/SellerPanel/personal-info", element: <EditProduct /> },
    ],
  },
  { path: "/SellerPanell", element: <SellerPanel /> },
  // { path: "/SellerLogin", element: <SellerLogin /> },
  { path: "/FAQ", element: <FAQ /> },
  { path: "*", element: <AccountBox /> }, //404
];
