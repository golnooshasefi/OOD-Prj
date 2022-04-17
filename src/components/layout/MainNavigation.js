import React from "react";
import Button from "../shared/Button";
import classes from "./MainNavigation.module.scss";
import classNames from "classnames";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className={classes.container}>
          <div className={classes.logo}>سبکینو</div>
          <form action="#" className={classes.search}>
            <input
              type="text"
              className={classes.search__input}
              placeholder="جستجو کنید"
            />
            <button className={classes.search__button}>
              <i
                className={classNames(
                  "fa-solid fa-magnifying-glass",
                  classes.search__icon
                )}
              />
            </button>
            <button className={classes.search__button}></button>
          </form>
          <Button
            className={classNames(classes.Button, classes.Button__header)}
          >
            Login
          </Button>
          <Button>Sig up</Button>
        </div>

        <nav className={classes.Navigation}>
          <ul className={classes["Navigation--list"]}>
            <li className={classes["Navigation--item"]}>دسته بندی</li>
            <li className={classes["Navigation--item"]}>درباره ما</li>
            <li className={classes["Navigation--item"]}>فروشنده شوید</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
