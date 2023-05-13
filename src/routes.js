import Homepage from "./pages/Homepage";
// import Survey from "./pages/Survey";
import AccountBox from "./pages/AccountBox";
import SellerAccountBox from "./pages/SellerAccountBox";
import ProductsList from "./pages/ProductsList";
import ShoppingList from "./pages/ShoppingList";
import Product from "./pages/Product";
import SellerPanelSidebar from "./pages/SellerPanel/SellerPanelSidebar";
import SellerPanel from "./pages/SellerPanel";
// import SellerLogin from "./pages/SellerLogin";
import FAQ from "./pages/FAQ";
import AddProduct from "./pages/SellerPanel/AddProduct";
import EditProduct from "./pages/SellerPanel/EditProduct";
import { default as SellerPersonalInfo } from "./pages/SellerPanel/PersonalInfo";
import { default as SellerOrders } from "./pages/SellerPanel/Orders";
import { default as UserOrders } from "./pages/UserPanel/Orders";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/AccountBox/ForgotPassword";
import UserPanel from "./pages/UserPanel";
import Favorites from "./pages/UserPanel/Favorites";
import AdditionalQuestion from "./pages/UserPanel/AdditionalQuestion";
import { default as UserPersonalInfo } from "./pages/UserPanel/PersonalInfo";
import ShopInfoPage from "./pages/ShopInfoPage";
import EditProductPage from "./pages/SellerPanel/EditProduct/EditProductPage";
import PaymentType from "./pages/PaymentType";
import Report from "./pages/SellerPanel/Report";
import Gifts from "./pages/UserPanel/Gifts";
import SuccessPay from "./pages/PaymentType/successfulPay";

export const routes = [
  { path: "/", element: <Homepage /> },

  {
    path: "/account-box",
    element: <AccountBox />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/seller-account-box",
    element: <SellerAccountBox />,
  },

  {
    path: "/shop-page/:shopId",
    element: <ShopInfoPage />,
  },

  { path: "/shopping-list", element: <ShoppingList /> },
  { path: "/products-list/", element: <ProductsList /> },
  { path: "/products-list/:productId", element: <Product /> },
  {
    path: "/seller-panel",
    element: <SellerPanel />,
    children: [
      { path: "/seller-panel/add-product", element: <AddProduct /> },
      { path: "/seller-panel/edit-product", element: <EditProduct /> },
      {
        path: "/seller-panel/edit-product/:productId",
        element: <EditProductPage />,
      },
      { path: "/seller-panel/orders", element: <SellerOrders /> },
      { path: "/seller-panel/personal-info", element: <SellerPersonalInfo /> },
      { path: "/seller-panel/report", element: <Report /> },
    ],
  },

  { path: "/FAQ", element: <FAQ /> },
  { path: "*", element: <NotFound /> },
  { path: "/user-panel", element: <UserPanel /> },
  {
    path: "/user-panel",
    element: <UserPanel />,
    children: [
      { path: "/user-panel/favorites", element: <Favorites /> },
      { path: "/user-panel/orders", element: <UserOrders /> },
      { path: "/user-panel/personal-info", element: <UserPersonalInfo /> },
      { path: "/user-panel/gifts", element: <Gifts /> },
    ],
  },
  { path: "/payment", element: <PaymentType /> },
  { path: "/successpay", element: <SuccessPay /> },
];
