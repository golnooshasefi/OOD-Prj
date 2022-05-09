import React from "react";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import ShopInfoPage from "./pages/ShopInfoPage";
import MainNavigation from "./components/layout/MainNavigation";
import SellerPanel from "./pages/SellerPanel";
import ShoppingList from "./pages/ShoppingList";

function App() {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>

      {/* <SellerPanel /> */}
    </>
  );
}

export default App;
