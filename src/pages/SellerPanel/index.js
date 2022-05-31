import classes from "./SellerPanel.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import SellerPanelSidebar from "./SellerPanelSidebar";
// import AddProduct from "./AddProduct";
// import Orders from "./Orders";
// import Favorites from "./Favorites";
// import EditProduct from "./EditProduct";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect } from "react";
import UserContext from "../../store/UserContext";

function SellerPanel() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.auth || (!user.auth && user.type !== "seller")) {
      navigate("/404");
    }
  }, [user.auth, user.type, user.navigate]);

  return (
    <>
      <MainNavigation />
      <div className={classes.SellerPanel}>
        <div className={classes.SellerPanel__container}>
          <SellerPanelSidebar />
          <Outlet />
          {/* <AddProduct /> */}
          {/* <Orders /> */}
          {/* <Favorites /> */}
          {/* <EditProduct /> */}
        </div>
      </div>
    </>
  );
}

export default SellerPanel;
