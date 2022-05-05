import classes from "./ShopInfoPage.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import classNames from "classnames";
function ShopInfoPage() {
  return (
    <>
      <MainNavigation />
      <div className={classes.ShopInfoPage}>
        <div className={classes.ShopInfoPage__InfoSec}>
          <div className={classes.ShopInfoPage__InfoSec__right}>
            <i
              className={classNames(
                "fa-solid fa-shop",
                classes.ShopInfoPage__icon
              )}
            />
            <h2 className={classes.ShopInfoPage__InfoSec__Name}>نام فروشگاه</h2>
          </div>
          <div className={classes.ShopInfoPage__InfoSec__Contact}>
            اطلاعات تماس
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopInfoPage;
