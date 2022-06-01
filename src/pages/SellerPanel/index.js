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
  console.log(user.auth, user.type);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(user.auth, user.type);
  //   if (!user.auth || (!user.auth && user.type !== "seller")) {
  //     navigate("/404");
  //   }
  //   console.log(user.auth, user.type);
  // }, [user.auth, user.type, navigate]);

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
