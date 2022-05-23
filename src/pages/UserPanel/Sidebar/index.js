import classes from "./Sidebar.module.scss";
import MainNavigation from "../../../components/layout/MainNavigation";
import classNames from "classnames";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav className={classes.sidebar}>
        <div className={classes["seller-info"]}>
          <img src="./images/user1.png" className={classes.userImage} />
          <div className={classes["seller-info__description"]}>
            <div className={classes["seller-info__title"]}>مهدی قنبرزاده</div>
            <div className={classes["seller-info__phone"]}>٠٩١٣٤٥٦٧٨٤٤</div>
          </div>
        </div>

        <ul className={classes["side-nav"]}>
          <Link to="/user-panel/favorites" className={classes.link}>
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
                    "fa-solid fa-bookmark"
                  )}
                />
                لیست علاقه‌مندی‌ها
              </a>
            </li>
          </Link>
          <Link to="/user-panel/orders" className={classes.link}>
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
                    "fa-solid fa-bag-shopping"
                  )}
                />
                سفارش‌ها
              </a>
            </li>
          </Link>
          <Link to="/user-panel/personal-info" className={classes.link}>
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
                    "fa-solid fa-user"
                  )}
                />
                اطلاعات حساب کاربری
              </a>
            </li>
          </Link>

          <Link to="/user-panel/personal-info" className={classes.link}>
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
                    "fa-solid fa-user"
                  )}
                />
                سوالات تکمیلی
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

export default Sidebar;
