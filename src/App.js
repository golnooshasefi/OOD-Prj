import React, { useContext, useEffect } from "react";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import ShopInfoPage from "./pages/ShopInfoPage";
import MainNavigation from "./components/layout/MainNavigation";
import SellerPanel from "./pages/SellerPanel";
import ShoppingList from "./pages/ShoppingList";
import FAQ from "./pages/FAQ";
import AddProductSurvey from "./pages/SellerPanel/AddProduct/AddProductSurvey";
import axiosInstance from "./axios";
import UserContext from "./store/UserContext";

function App() {
  const { checkLogin } = useContext(UserContext);
  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    axiosInstance.post(`/accounts/initialze_recom/`).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element}>
            {route?.children &&
              route.children.map((childrenRoute) => (
                <Route {...childrenRoute} />
              ))}
          </Route>
        ))}
      </Routes>
      {/* <FAQ /> */}
      {/* <SellerPanel /> */}
      {/* <AddProductSurvey /> */}
    </>
  );
}

export default App;
