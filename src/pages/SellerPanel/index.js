import classes from "./SellerPanel.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import SellerPanelSidebar from "./SellerPanelSidebar";
import AddProduct from "./AddProduct";

function SellerPanel() {
  return (
    <>
      <MainNavigation />
      <div className={classes.SellerPanel}>
        <div className={classes.SellerPanel__container}>
          <SellerPanelSidebar />
          <AddProduct />
        </div>
      </div>
    </>
  );
}

export default SellerPanel;
