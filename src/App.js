import React from "react";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import ShopInfoPage from "./pages/ShopInfoPage";
import MainNavigation from "./components/layout/MainNavigation";
import SellerPanel from "./pages/SellerPanel";
import ShoppingList from "./pages/ShoppingList";
import FAQ from "./pages/FAQ";
import AddProductSurvey from "./pages/SellerPanel/AddProduct/AddProductSurvey";

function App() {
  return (
    <>
      {/* <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes> */}
      {/* <FAQ /> */}
      <SellerPanel />
      {/* <AddProductSurvey /> */}
    </>
  );
}

export default App;
