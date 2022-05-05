import React from "react";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import ShopInfoPage from "./pages/ShopInfoPage";
import MainNavigation from "./components/layout/MainNavigation";
import SellerPanelSidebar from "./pages/SellerPanel/SellerPanelSidebar";
function App() {
  return (
    <>
      {/* <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes> */}
      {/* <ShopInfoPage /> */}
      <SellerPanelSidebar />
    </>
  );
}

export default App;
