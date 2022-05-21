import classes from "./SellerPanel.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import SellerPanelSidebar from "./SellerPanelSidebar";
import AddProduct from "./AddProduct";
import Orders from "./Orders";
import Favorites from "./Favorites";
import EditProduct from "./EditProduct";
import { Outlet } from "react-router-dom";

function SellerPanel() {
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
