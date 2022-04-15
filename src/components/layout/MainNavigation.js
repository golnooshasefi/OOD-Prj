import React from "react";
import classes from "./MainNavigation.module.scss";

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
              <i className="fa-solid fa-magnifying-glass" />
            </button>
            <button className={classes.search__button}></button>
          </form>
          <button>Login button</button>
          <button>Sig up button</button>
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
