import classes from "./SellerPanelSidebar.module.scss";
import MainNavigation from "../../../components/layout/MainNavigation";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../../store/UserContext";

function SellerPanelSidebar() {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      <nav className={classes.sidebar}>
        <div className={classes["seller-info"]}>
          <img src="./images/user1.png" className={classes.userImage} />

          <div className={classes["seller-info__description"]}>
            <div className={classes["seller-info__title"]}>{user.username}</div>
            <div className={classes["seller-info__phone"]}>
              {user.phoneNumber}
            </div>
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
              <Link to={"/seller-panel/add-product"} className={classes.link}>
                <li className={classes["side-nav__submenu__item"]}>
                  <a href="#" className={classes["side-nav__submenu__link"]}>
                    افزودن کالا
                  </a>
                </li>
              </Link>

              <Link to={"/seller-panel/edit-product"} className={classes.link}>
                <li className={classes["side-nav__submenu__item"]}>
                  <a href="#" className={classes["side-nav__submenu__link"]}>
                    ویرایش کالاها
                  </a>
                </li>
              </Link>
            </ul>
          </li>

          <Link to={"/seller-panel/orders"} className={classes.link}>
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

          <Link to={"/seller-panel/personal-info"} className={classes.link}>
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

          <Link to={"/"} className={classes.link}>
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
