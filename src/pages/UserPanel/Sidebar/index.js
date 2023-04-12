import classes from "./Sidebar.module.scss";
import MainNavigation from "../../../components/layout/MainNavigation";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../store/UserContext";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";

function Sidebar() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  function logoutHandler() {
    logout();
    navigate("/");
  }

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
        <div className={classes.wallet}>
          <div className={classes.wallet__info}>
            <i
              className={classNames(
                classes["side-nav__icon"],
                "fa-solid fa-wallet"
              )}
            ></i>
            موجودی کیف پول
            <div className={classes.wallet__balance}>
              <span
                className={classes["wallet__balance--price"]}
              >
                {/* {digitsEnToFa(addCommas(user.priceOff))} */}
                {digitsEnToFa(addCommas(100000))}
              </span>
              <span
                className={classes.item__description__priceContainer__toman}
              >
                تومان
              </span>
            </div>
          </div>

          <a href="#" className={classes.wallet__link}>
            افزایش موجودی
            <i
              className={classNames(
                classes.wallet__icon,
                "fa-solid fa-arrow-left"
              )}
            ></i>
          </a>
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

          {/* <Link to={"/"} className={classes.link}> */}
          <li onClick={logoutHandler} className={classes["side-nav__item"]}>
            <a href="#/" className={classNames(classes["side-nav__link"])}>
              <i
                className={classNames(
                  classes["side-nav__icon"],
                  "fa-solid fa-arrow-right-from-bracket"
                )}
              />
              <span>خروج</span>
            </a>
          </li>
          {/* </Link> */}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
