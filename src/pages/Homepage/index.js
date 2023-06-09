import React, { Suspense } from "react";
import Footer from "../../components/layout/Footer";
import MainNavigation from "../../components/layout/MainNavigation";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";

function Homepage() {
  return (
    <>
      <MainNavigation />
      <HeroSection />

      <InfoSection />
      <Footer />
    </>
  );
}

export default Homepage;
