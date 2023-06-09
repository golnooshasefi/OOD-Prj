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
          <Link to="/" className={classes.link}>
            <div className={classes.logo}>سبکینو</div>
          </Link>

          {user.auth ? (
            <div className={classes.container__btns}>
              {user.type === "user" && (
                <Link to="/shopping-list" className={classes.link}>
                  <Button color="white" className={classes.header__navButton}>
                    <i
                      className={classNames(
                        classes.header__login_logo,
                        "fa-solid fa-cart-shopping"
                      )}
                    />
                    سبد خرید
                  </Button>
                </Link>
              )}

              <Link
                to={user.type === "user" ? "/user-panel" : "/seller-panel"}
                className={classes.link}
              >
                <Button color="white" className={classes.header__navButton}>
                  <i
                    className={classNames(
                      classes.header__login_logo,
                      "fa-solid fa-user-large"
                    )}
                  />
                  پنل کاربری
                </Button>
              </Link>
            </div>
          ) : (
            <Link to="/account-box" className={classes.link}>
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
            <Link to="/products-list/" className={classes.link}>
              <li className={classes["Navigation--item"]}>محصولات</li>
            </Link>
            <Link to="/about-us" className={classes.link}>
              <li className={classes["Navigation--item"]}>درباره ما</li>
            </Link>
            {!user.auth && (
              <Link to={"/seller-account-box"} className={classes.link}>
                <li className={classes["Navigation--item"]}>فروشنده شوید</li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
