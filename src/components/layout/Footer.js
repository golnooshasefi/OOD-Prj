import classNames from "classnames";
import React from "react";
import classes from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={classes.Container}>
      <div className={classes.Footer}></div>
      <div className={classes.Footer__logo}>سبکینو</div>
      <div className={classes.row}>
        <div className={classes.column}>
          <ul className={classes.Footer__list}>
            <li className={classes.Footer__item}>
              <a href="#" className={classes.Footer__link}>
                درباره ما
              </a>
            </li>
            <li className={classes.Footer__item}>
              <a href="#" className={classes.Footer__link}>
                پرسش‌های متداول
              </a>
            </li>
            <li className={classes.Footer__item}>
              <a href="#" className={classes.Footer__link}>
                تماس با ما
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.column}>
          <div className={classes.Footer__icon}>
            <i
              className={classNames(
                "fa-brands fa-instagram",
                classes["Footer__icon--i1"]
              )}
            />
            <i
              className={classNames(
                "fa-brands fa-twitter",
                classes["Footer__icon--i2"]
              )}
            />
            <i
              className={classNames(
                "fa-brands fa-linkedin",
                classes["Footer__icon--i3"]
              )}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;