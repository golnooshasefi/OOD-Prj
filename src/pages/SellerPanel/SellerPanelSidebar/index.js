import classes from "./SellerPanelSidebar.module.scss";
import MainNavigation from "../../../components/layout/MainNavigation";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react";

function SellerPanelSidebar() {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  return (
    <>
      <nav className={classes.sidebar}>
        <div className={classes["seller-info"]}>
          <img src="./images/user1.png" className={classes.userImage} />

          <div className={classes["seller-info__description"]}>
            <div className={classes["seller-info__title"]}>فروشگاه بزرگ</div>
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
              onClick={() =>
                setSubMenuIsOpen((subMenuIsOpen) => !subMenuIsOpen)
              }
            >
              <i
                className={classNames(
                  classes["side-nav__icon"],
                  "fa-solid fa-bars-progress"
                )}
              />
              مدیریت کالاها
              <i
                className={classNames("fa-solid fa-angle-down", classes.icon)}
              />
            </a>
            <ul
              className={
                subMenuIsOpen
                  ? classes["side-nav__submenu--show"]
                  : classes["side-nav__submenu"]
              }
            >
              <Link to={"/seller-panel/add-product"}>
                <li className={classes["side-nav__submenu__item"]}>
                  <a href="#" className={classes["side-nav__submenu__link"]}>
                    افزودن کالا
                  </a>
                </li>
              </Link>

              <Link to={"/seller-panel/edit-product"}>
                <li className={classes["side-nav__submenu__item"]}>
                  <a href="#" className={classes["side-nav__submenu__link"]}>
                    ویرایش کالاها
                  </a>
                </li>
              </Link>
            </ul>
          </li>

          <Link to={"/seller-panel/personal-info"}>
            <li className={classes["side-nav__item"]}>
              <a href="#" className={classNames(classes["side-nav__link"])}>
                <i
                  className={classNames(
                    classes["side-nav__icon"],
                    "fa-solid fa-bag-shopping"
                  )}
                />
                <span> سفارش‌ها </span>
              </a>
            </li>
          </Link>

          <Link to={"/seller-panel/personal-info"}>
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
          </Link>

          <Link to={"/"}>
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
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default SellerPanelSidebar;
