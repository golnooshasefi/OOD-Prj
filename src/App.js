import React from "react";
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/layout/Footer";
import HeroSection from "./pages/Homepage/HeroSection";
import Survey from "./pages/Survey";
import { AccountBox } from "./components/accountBox";
import Products from "./pages/ProductPage/products";
import InfoSection from "./pages/Homepage/InfoSection";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <>
      {/* <MainNavigation />
      <HeroSection />
      <InfoSection />
      <Footer /> */}
      {/* <Survey /> */}
      {/* <AccountBox /> */}
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
      {/* <Homepage /> */}
    </>
  );
}

export default App;
