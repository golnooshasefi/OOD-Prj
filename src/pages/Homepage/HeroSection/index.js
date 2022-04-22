import React from "react";
import classes from "./HeroSection.module.scss";
import Button from "../../../components/shared/Button";
import classNames from "classnames";

function HeroSection() {
  return (
    <section className={classes.HeroSection}>
      <div className={classes.HeroSection__content}>
        <div className={classes.HeroSection__info}>
          <h1 className={classes["HeroSection__info--header"]}>
            انتخاب سبک لباس خود را به ما بسپارید
          </h1>
          <Button color="purple">امتحان کنید</Button>
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
          <img
            src="../images/6.jpg"
            alt="picture 3"
            className={classNames(
              classes.HeroSection__gallery__photo,
              classes["HeroSection__gallery__photo--p3"]
            )}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
