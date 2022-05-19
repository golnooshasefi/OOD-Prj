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
import PersonalInfo from "./pages/SellerPanel/PersonalInfo";
import Orders from "./pages/SellerPanel/Orders";

export const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/survey", element: <Survey /> },
  {
    path: "/account-box",
    element: <AccountBox />,
  },
  {
    path: "/seller-account-box",
    element: <SellerAccountBox />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  { path: "/shopping-list", element: <ShoppingList /> },
  { path: "/product", element: <Product /> },
  {
    path: "/seller-panel",
    element: <SellerPanel />,
    children: [
      { path: "/seller-panel/add-product", element: <AddProduct /> },
      // { path: "/seller-panel/personal-info", element: <Orders /> },
      { path: "/seller-panel/personal-info", element: <PersonalInfo /> },
    ],
  },
  // { path: "/SellerPanell", element: <SellerPanel /> },
  // { path: "/SellerLogin", element: <SellerLogin /> },
  { path: "/FAQ", element: <FAQ /> },
  { path: "*", element: <AccountBox /> }, //404
];
