import classes from "./SellerPanelSidebar.module.scss";
import MainNavigation from "../../../components/layout/MainNavigation";
import classNames from "classnames";

function SellerPanelSidebar() {
  return (
    <>
      <MainNavigation />
      <div className={classes.SellerPanel}>
        <div className={classes.SellerPanel__content}>
          <nav className={classes.sidebar}>
            <div className={classes["seller-info"]}>
              <i
                className={classNames(
                  "fa-solid fa-shop",
                  classes["seller-info__icon"]
                )}
              />
              <div className={classes["seller-info__description"]}>
                <div className={classes["seller-info__title"]}>
                  فروشگاه بزرگ
                </div>
                <div className={classes["seller-info__phone"]}>٠٩١٣٤٥٦٧٨٤٤</div>
              </div>
            </div>
            <ul className={classes["side-nav"]}>
              <li className={classes["side-nav__item"]}>
                <a
                  href="#"
                  className={classNames(
                    classes["side-nav__link--active"],
                    classes["side-nav__link"]
                  )}
                >
                  <i
                    className={classNames(
                      classes["side-nav__icon"],
                      "fa-solid fa-store"
                    )}
                  />
                  مدیریت کالاها
                  <i
                    className={classNames(
                      "fa-solid fa-angle-down",
                      classes.icon
                    )}
                  />
                </a>
                <ul className={classes["side-nav__submenu"]}>
                  <li className={classes["side-nav__submenu__item"]}>
                    <a href="#" className={classes["side-nav__submenu__link"]}>
                      افزودن کالا
                    </a>
                  </li>
                  <li className={classes["side-nav__submenu__item"]}>
                    <a href="#" className={classes["side-nav__submenu__link"]}>
                      ویرایش کالاها
                    </a>
                  </li>
                </ul>
              </li>
              <li className={classes["side-nav__item"]}>
                <a href="#" className={classNames(classes["side-nav__link"])}>
                  <i
                    className={classNames(
                      classes["side-nav__icon"],
                      "fa-regular fa-user"
                    )}
                  />
                  <span>اطلاعات حساب کاربری</span>
                </a>
              </li>
              <li className={classes["side-nav__item"]}>
                <a href="#" className={classNames(classes["side-nav__link"])}>
                  <i
                    className={classNames(
                      classes["side-nav__icon"],
                      "fa-solid fa-arrow-right-from-bracket"
                    )}
                  />
                  <span>خروج</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SellerPanelSidebar;
