import React from "react";
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/layout/Footer";
import HeroSection from "./pages/Homepage/HeroSection";
import Survey from "./pages/Survey";
import { AccountBox } from "./components/accountBox";
import Products from "./components/productPage/products";
import InfoSection from "./pages/Homepage/InfoSection";
function App() {
  return (
    <>
      {/* <MainNavigation />
      <HeroSection />
      <InfoSection />
      <Footer /> */}
      <Survey />
      {/* <AccountBox /> */}
    </>
  );
}

export default App;
