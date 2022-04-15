import React from "react";
import classes from "./HeroSection.module.scss";
import classNames from "classnames";

function HeroSection() {
  return (
    <section className={classes.HeroSection}>
      <div className={classes.HeroSection__content}>
        <div className={classes.HeroSection__info}>
          <h1 className={classes["HeroSection__info--header"]}>
            انتخاب سبک خود را به ما بسپارید
          </h1>
          <button className={classes["HeroSection__info--button"]}>
            امتحان کنید
          </button>
        </div>
        <div className={classes.HeroSection__gallery}>
          <img
            src="./images/2.jpg"
            alt="picture 1"
            className={classNames(
              classes.HeroSection__gallery__photo,
              classes["HeroSection__gallery__photo--p1"]
            )}
          />
          <img
            src="../images/5.jpg"
            alt="picture 2"
            className={classNames(
              classes.HeroSection__gallery__photo,
              classes["HeroSection__gallery__photo--p2"]
            )}
          />
          {/* <img
            src="https://images.unsplash.com/photo-1600247354058-a55b0f6fb720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="picture 3"
            className={classNames(
              classes.gallery__photo,
              classes["gallery__photo--p3"]
            )}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
