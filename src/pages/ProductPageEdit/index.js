import Footer from "../../components/layout/Footer";
import MainNavigation from "../../components/layout/MainNavigation";
import Button from "../../components/shared/Button";
import classes from "./Product.module.scss";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
const heart = <FontAwesomeIcon icon={faHeart} />;
const heartSolid = <FontAwesomeIcon icon={faHeartSolid} />;
const tag = <FontAwesomeIcon icon={faTag} />;
const shop = <FontAwesomeIcon icon={faShop} />;
const money = <FontAwesomeIcon icon={faMoneyBill} />;
const check = <FontAwesomeIcon icon={faCircleCheck} />;
const shield = <FontAwesomeIcon icon={faShield} />;
const star = <FontAwesomeIcon icon={faStar} />;
const starSolid = <FontAwesomeIcon icon={faStarSolid} />;

function Product() {
  return (
    <>
      <MainNavigation />
      <section className={classes.Product}>
        <div className={classes.Product__imgBox}>
          <img
            className={classes.Product__imgBox__img}
            src={"./images/clothes/11bg.png"}
            alt={"fake"}
          ></img>
          <span className={classes.Product__imgBox__regular}>{heart}</span>
          {/* <span className={classes.Product__imgBox__solid}>{heartSolid}</span> */}
        </div>
        <div className={classes.Product__descriptionBox}>
          <span className={classes.Product__descriptionBox__name}>
            {"شلوار مردانه سیدونا مدل MSI03072-403"}
          </span>
          <div className={classes.Product__descriptionBox__starBox}>
            <span className={classes.Product__descriptionBox__starBox__star}>
              {star}
            </span>
            <span className={classes.Product__descriptionBox__starBox__star}>
              {star}
            </span>
            <span className={classes.Product__descriptionBox__starBox__star}>
              {star}
            </span>
            <span className={classes.Product__descriptionBox__starBox__star}>
              {star}
            </span>
            <span className={classes.Product__descriptionBox__starBox__star}>
              {star}
            </span>
          </div>

          <span className={classes.Product__descriptionBox__spec}>
            {"مشخصات"}
          </span>
          <div className={classes.Product__descriptionBox__specBoxFlex}>
            <div className={classes.Product__descriptionBox__specBox}>
              <span className={classes.Product__descriptionBox__specBox__icon}>
                {tag}
              </span>
              <span
                className={classes.Product__descriptionBox__specBox__property}
              >
                {"اندازه:"}
              </span>
              <span className={classes.Product__descriptionBox__specBox__value}>
                {"XLL"}
              </span>
            </div>

            <div className={classes.Product__descriptionBox__specBox}>
              <span className={classes.Product__descriptionBox__specBox__icon}>
                {tag}
              </span>
              <span
                className={classes.Product__descriptionBox__specBox__property}
              >
                {"رنگ:"}
              </span>
              <span className={classes.Product__descriptionBox__specBox__value}>
                {"سبز"}
              </span>
            </div>

            <div className={classes.Product__descriptionBox__specBox}>
              <span className={classes.Product__descriptionBox__specBox__icon}>
                {tag}
              </span>
              <span
                className={classes.Product__descriptionBox__specBox__property}
              >
                {"قد:"}
              </span>
              <span className={classes.Product__descriptionBox__specBox__value}>
                {"180"}
              </span>
            </div>

            <div className={classes.Product__descriptionBox__specBox}>
              <span className={classes.Product__descriptionBox__specBox__icon}>
                {tag}
              </span>
              <span
                className={classes.Product__descriptionBox__specBox__property}
              >
                {"جنس:"}
              </span>
              <span className={classes.Product__descriptionBox__specBox__value}>
                {"نخ"}
              </span>
            </div>

            <div className={classes.Product__descriptionBox__specBox}>
              <span className={classes.Product__descriptionBox__specBox__icon}>
                {tag}
              </span>
              <span
                className={classes.Product__descriptionBox__specBox__property}
              >
                {"طرح:"}
              </span>
              <span className={classes.Product__descriptionBox__specBox__value}>
                {"راه راه"}
              </span>
            </div>

            <div className={classes.Product__descriptionBox__specBox}>
              <span className={classes.Product__descriptionBox__specBox__icon}>
                {tag}
              </span>
              <span
                className={classes.Product__descriptionBox__specBox__property}
              >
                {"کشور تولید کننده:"}
              </span>
              <span className={classes.Product__descriptionBox__specBox__value}>
                {"ایران"}
              </span>
            </div>
          </div>
        </div>
        <div className={classes.Product__sellerBox}>
          <span className={classes.Product__sellerBox__text}>فروشنده</span>
          <div className={classes.Product__sellerBox__nameBox}>
            <span className={classes.Product__sellerBox__nameBox__sellerIcon}>
              {shop}
            </span>
            <span className={classes.Product__sellerBox__nameBox__sellerName}>
              بزرگ
            </span>
          </div>
          <div className={classes.Product__sellerBox__featureBox}>
            <span className={classes.Product__sellerBox__featureBox__icon}>
              {shield}
            </span>
            <span className={classes.Product__sellerBox__featureBox__text}>
              گارانتی اصالت و سلامت فیزیکی کالا
            </span>
          </div>
          <div className={classes.Product__sellerBox__featureBox}>
            <span className={classes.Product__sellerBox__featureBox__icon}>
              {check}
            </span>
            <span className={classes.Product__sellerBox__featureBox__text}>
              موجود در انبار
            </span>
          </div>
          <div className={classes.Product__sellerBox__featureBox}>
            <span className={classes.Product__sellerBox__featureBox__icon}>
              {money}
            </span>
            <span className={classes.Product__sellerBox__featureBox__text}>
              {digitsEnToFa(addCommas("199000"))} تومان
            </span>
          </div>
          <Button color="purple" className={classes["Product__sellerBox__btn"]}>
            افزودن به سبد
          </Button>
        </div>
        <div className={classes.Product__similarBox}>
          <span className={classes.Product__similarBox__text}>
            محصولات مشابه
          </span>
          <div className={classes.Product__similarBox__items}>
            <div className={classes.Product__similarBox__items__item}>
              <img
                className={classes.Product__similarBox__items__item__pic}
                src={"./images/clothes/11bg.png"}
                alt={"fake"}
              />
              <span className={classes.Product__similarBox__items__item__name}>
                {"شلوار مردانه سیدونا مدل MSI03072-403"}
              </span>
              <span className={classes.Product__similarBox__items__item__price}>
                {digitsEnToFa(addCommas("199999"))} تومان
              </span>
              <span
                className={classes.Product__similarBox__items__item__priceOff}
              >
                {digitsEnToFa(addCommas("200000"))}
              </span>
            </div>
            <div className={classes.Product__similarBox__items__item}>
              <img
                className={classes.Product__similarBox__items__item__pic}
                src={"./images/clothes/11bg.png"}
                alt={"fake"}
              />
              <span className={classes.Product__similarBox__items__item__name}>
                {"شلوار مردانه سیدونا مدل MSI03072-403"}
              </span>
              <span className={classes.Product__similarBox__items__item__price}>
                {digitsEnToFa(addCommas("199999"))} تومان
              </span>
            </div>
            <div className={classes.Product__similarBox__items__item}>
              <img
                className={classes.Product__similarBox__items__item__pic}
                src={"./images/clothes/11bg.png"}
                alt={"fake"}
              />
              <span className={classes.Product__similarBox__items__item__name}>
                {"شلوار مردانه سیدونا مدل MSI03072-403"}
              </span>
              <span className={classes.Product__similarBox__items__item__price}>
                {digitsEnToFa(addCommas("199999"))} تومان
              </span>
            </div>
            <div className={classes.Product__similarBox__items__item}>
              <img
                className={classes.Product__similarBox__items__item__pic}
                src={"./images/clothes/11bg.png"}
                alt={"fake"}
              />
              <span className={classes.Product__similarBox__items__item__name}>
                {"شلوار مردانه سیدونا مدل MSI03072-403"}
              </span>
              <span className={classes.Product__similarBox__items__item__price}>
                {digitsEnToFa(addCommas("199999"))} تومان
              </span>
            </div>
            <div className={classes.Product__similarBox__items__item}>
              <img
                className={classes.Product__similarBox__items__item__pic}
                src={"./images/clothes/11bg.png"}
                alt={"fake"}
              />
              <span className={classes.Product__similarBox__items__item__name}>
                {"شلوار مردانه سیدونا مدل MSI03072-403"}
              </span>
              <span className={classes.Product__similarBox__items__item__price}>
                {digitsEnToFa(addCommas("199999"))} تومان
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Product;
