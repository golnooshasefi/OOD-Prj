// import Homepage from "./pages/Homepage";
// import AddProduct from "./pages/SellerPanel/AddProduct";
// import EditProduct from "./pages/SellerPanel/EditProduct";
// import { default as SellerPersonalInfo } from "./pages/SellerPanel/PersonalInfo";
// import { default as SellerOrders } from "./pages/SellerPanel/Orders";
// import EditProductPage from "./pages/SellerPanel/EditProduct/EditProductPage";
// import Report from "./pages/SellerPanel/Report";
// import SellerPanelSidebar from "./pages/SellerPanel/SellerPanelSidebar";

// import Favorites from "./pages/UserPanel/Favorites";
// import { default as UserPersonalInfo } from "./pages/UserPanel/PersonalInfo";
// import { default as UserOrders } from "./pages/UserPanel/Orders";
// import Gifts from "./pages/UserPanel/Gifts";

// import SellerPanel from "./pages/SellerPanel";
// import UserPanel from "./pages/UserPanel";

// import ProductsList from "./pages/ProductsList";
// import AccountBox from "./pages/AccountBox";
// import ForgotPassword from "./pages/AccountBox/ForgotPassword";
// import RegisterConfirm from "./pages/AccountBox/RegisterConfirm";
import React, { Suspense } from "react";

import SellerAccountBox from "./pages/SellerAccountBox";
import ShoppingList from "./pages/ShoppingList";

import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

import ShopInfoPage from "./pages/ShopInfoPage";

const AccountBox = React.lazy(() => import("./pages/AccountBox"));
const ForgotPassword = React.lazy(() =>
  import("./pages/AccountBox/ForgotPassword")
);
const RegisterConfirm = React.lazy(() =>
  import("./pages/AccountBox/RegisterConfirm")
);

const PaymentType = React.lazy(() => import("./pages/PaymentType"));
const SuccessPay = React.lazy(() =>
  import("./pages/PaymentType/successfulPay")
);
const Homepage = React.lazy(() => import("./pages/Homepage"));

const ProductsList = React.lazy(() => import("./pages/ProductsList"));
const Product = React.lazy(() => import("./pages/Product"));

const SellerPanel = React.lazy(() => import("./pages/SellerPanel"));
const AddProduct = React.lazy(() => import("./pages/SellerPanel/AddProduct"));
const EditProduct = React.lazy(() => import("./pages/SellerPanel/EditProduct"));
const EditProductPage = React.lazy(() =>
  import("./pages/SellerPanel/EditProduct/EditProductPage")
);
const SellerOrders = React.lazy(() => import("./pages/SellerPanel/Orders"));
const SellerPersonalInfo = React.lazy(() =>
  import("./pages/SellerPanel/PersonalInfo")
);
const Report = React.lazy(() => import("./pages/SellerPanel/Report"));

const UserPanel = React.lazy(() => import("./pages/UserPanel"));
const Favorites = React.lazy(() => import("./pages/UserPanel/Favorites"));
const UserPersonalInfo = React.lazy(() =>
  import("./pages/UserPanel/PersonalInfo")
);
const UserOrders = React.lazy(() => import("./pages/UserPanel/Orders"));
const Gifts = React.lazy(() => import("./pages/UserPanel/Gifts"));

export const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Homepage />
      </Suspense>
    ),
  },

  {
    path: "/account-box",
    element: (
      <Suspense>
        <AccountBox />
      </Suspense>
    ),
  },

  {
    path: "/forgot-password",
    element: (
      <Suspense>
        <ForgotPassword />
      </Suspense>
    ),
  },
  {
    path: "/confirm-register",
    element: (
      <Suspense>
        <RegisterConfirm />
      </Suspense>
    ),
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
  {
    path: "/products-list/",
    element: (
      <Suspense>
        <ProductsList />{" "}
      </Suspense>
    ),
  },
  {
    path: "/products-list/:productId",
    element: (
      <Suspense>
        <Product />
      </Suspense>
    ),
  },
  {
    path: "/seller-panel",
    element: (
      <Suspense>
        <SellerPanel />
      </Suspense>
    ),
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

  {
    path: "/user-panel",
    element: (
      <Suspense>
        <UserPanel />
      </Suspense>
    ),
    children: [
      { path: "/user-panel/favorites", element: <Favorites /> },
      { path: "/user-panel/orders", element: <UserOrders /> },
      { path: "/user-panel/personal-info", element: <UserPersonalInfo /> },
      { path: "/user-panel/gifts", element: <Gifts /> },
    ],
  },
  {
    path: "/payment",
    element: (
      <Suspense>
        <PaymentType />{" "}
      </Suspense>
    ),
  },
  {
    path: "/successpay",
    element: (
      <Suspense>
        <SuccessPay />
      </Suspense>
    ),
  },
];
