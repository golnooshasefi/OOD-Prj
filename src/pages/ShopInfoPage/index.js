import classes from "./ShopInfoPage.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import classNames from "classnames";
function ShopInfoPage() {
  return (
    <>
      <MainNavigation />
      <div className={classes.ShopInfoPage}>
        <div className={classes.ShopInfoPage__InfoSec}>
          <div className={classes.ShopInfoPage__InfoSec__header}>
            <i
              className={classNames(
                "fa-solid fa-shop",
                classes.ShopInfoPage__icon
              )}
            />
            <h2 className={classes.ShopInfoPage__InfoSec__Name}>نام فروشگاه</h2>
          </div>
          <div className={classes.ShopInfoPage__InfoSec__address}>
            <i
              className={classNames(
                "fa-solid fa-location-dot",
                classes.ShopInfoPage__icon
              )}
            />
            اصفهان-خیابان توحید-کوچه خورشید-پلاک 8
          </div>
          <div className={classes.ShopInfoPage__InfoSec__phone}>
            <i
              className={classNames(
                "fa-solid fa-phone",
                classes.ShopInfoPage__icon
              )}
            />
            0313-6259446
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopInfoPage;
