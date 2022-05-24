import React, { useContext } from "react";
import UserContext from "../../store/UserContext";
import Button from "../shared/Button";
import classes from "./MainNavigation.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
const loginIcon = <FontAwesomeIcon icon={faArrowRightToBracket} />;

function MainNavigation() {
  const { user } = useContext(UserContext);
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className={classes.container}>
          <Link to="/" className={classes.header__link}>
            <div className={classes.logo}>سبکینو</div>
          </Link>

          {user.auth ? (
            <Link to="/">
              <Button color="white">خروج</Button>
            </Link>
          ) : (
            <Link to="/account-box">
              {/* <i className={classes.header__login_logo}>{loginIcon}</i> */}
              <Button color="white">
                <i className={classes.header__login_logo}>{loginIcon}</i>ورود |
                ثبت‌نام
              </Button>
            </Link>
          )}
        </div>

        <nav className={classes.Navigation}>
          <ul className={classes["Navigation--list"]}>
            <Link to="/products-list">
              <li className={classes["Navigation--item"]}> محصولات</li>
            </Link>
            <li className={classes["Navigation--item"]}>درباره ما</li>
            <Link to={"/seller-account-box"} className={classes.link}>
              <li className={classes["Navigation--item"]}>فروشنده شوید</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
