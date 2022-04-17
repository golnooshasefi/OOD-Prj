import React from "react";
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/layout/Footer";
import HeroSection from "./pages/Homepage/HeroSection";
function App() {
  return (
    <>
      <MainNavigation />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
