import React from "react";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
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
