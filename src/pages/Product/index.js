import Footer from "../../components/layout/Footer";
import MainNavigation from "../../components/layout/MainNavigation";
import Button from "../../components/shared/Button";
import classes from "./Product.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import axiosInstance from "./../../axios";

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
import SimilarItem from "./SimilarItem";
import { useEffect, useState } from "react";

import SyncLoader from "react-spinners/SyncLoader";

const heart = <FontAwesomeIcon icon={faHeart} />;
const heartSolid = <FontAwesomeIcon icon={faHeartSolid} />;
const tag = <FontAwesomeIcon icon={faTag} />;
const shop = <FontAwesomeIcon icon={faShop} />;
const money = <FontAwesomeIcon icon={faMoneyBill} />;
const check = <FontAwesomeIcon icon={faCircleCheck} />;
const shield = <FontAwesomeIcon icon={faShield} />;
const star = <FontAwesomeIcon icon={faStar} />;
const starSolid = <FontAwesomeIcon icon={faStarSolid} />;

const override = `
  display: inline-block;
  margin: 0 auto;
`;

function Product() {
  let [loading, setLoading] = useState(true);
  // let [isFavorite, setFavorite] = useState
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const Stars = {
    size: 25,
    count: 5,
    color: "#868e96",
    activeColor: "#6667ab",
    value: 0,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };

  console.log(productId);
  useEffect(() => {
    console.log(productId);
    if (productId) {
      axiosInstance.get(`/accounts/product_info/${productId}/`).then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
          setProduct(res.data);
          setLoading(false);
        }
      });
    } else {
      // navigate("/404", { replace: true });
    }
  }, [productId]);

  const favoriteHandler = () => {
    axiosInstance
      .post(`accounts/add_to_favorite/`, {
        data: product.id,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          console.log(res.data);
        }
      });
  };

  return (
    <>
      <MainNavigation />
      <div className={classes.container}>
        <SyncLoader
          color="#6667ab"
          loading={loading}
          css={override}
          size={15}
          margin={2}
        />
        {!loading && (
          <section className={classes.Product}>
            <div className={classes.Product__imgBox}>
              <img
                className={classes.Product__imgBox__img}
                src={product.upload}
                alt={product.product_name}
              ></img>
              <span
                className={classes.Product__imgBox__regular}
                onClick={favoriteHandler}
              >
                {heart}
              </span>
              {/* <span className={classes.Product__imgBox__solid}>{heartSolid}</span> */}
            </div>
            <div className={classes.Product__descriptionBox}>
              <span className={classes.Product__descriptionBox__name}>
                {product.product_name}
              </span>
              <div className={classes.Product__descriptionBox__starBox}>
                <ReactStars {...Stars} />
              </div>

              <span className={classes.Product__descriptionBox__spec}>
                {"مشخصات"}
              </span>
              <div className={classes.Product__descriptionBox__specBoxFlex}>
                <div className={classes.Product__descriptionBox__specBox}>
                  <span
                    className={classes.Product__descriptionBox__specBox__icon}
                  >
                    {tag}
                  </span>
                  <span
                    className={
                      classes.Product__descriptionBox__specBox__property
                    }
                  >
                    {"اندازه:"}
                  </span>
                  <span
                    className={classes.Product__descriptionBox__specBox__value}
                  >
                    {product.product_size}
                  </span>
                </div>

                <div className={classes.Product__descriptionBox__specBox}>
                  <span
                    className={classes.Product__descriptionBox__specBox__icon}
                  >
                    {tag}
                  </span>
                  <span
                    className={
                      classes.Product__descriptionBox__specBox__property
                    }
                  >
                    {"رنگ:"}
                  </span>
                  <span
                    className={classes.Product__descriptionBox__specBox__value}
                  >
                    {product.product_color}
                  </span>
                </div>

                <div className={classes.Product__descriptionBox__specBox}>
                  <span
                    className={classes.Product__descriptionBox__specBox__icon}
                  >
                    {tag}
                  </span>
                  <span
                    className={
                      classes.Product__descriptionBox__specBox__property
                    }
                  >
                    {"قد:"}
                  </span>
                  <span
                    className={classes.Product__descriptionBox__specBox__value}
                  >
                    {product.product_height}
                  </span>
                </div>

                <div className={classes.Product__descriptionBox__specBox}>
                  <span
                    className={classes.Product__descriptionBox__specBox__icon}
                  >
                    {tag}
                  </span>
                  <span
                    className={
                      classes.Product__descriptionBox__specBox__property
                    }
                  >
                    {"جنس:"}
                  </span>
                  <span
                    className={classes.Product__descriptionBox__specBox__value}
                  >
                    {product.product_material}
                  </span>
                </div>

                <div className={classes.Product__descriptionBox__specBox}>
                  <span
                    className={classes.Product__descriptionBox__specBox__icon}
                  >
                    {tag}
                  </span>
                  <span
                    className={
                      classes.Product__descriptionBox__specBox__property
                    }
                  >
                    {"طرح:"}
                  </span>
                  <span
                    className={classes.Product__descriptionBox__specBox__value}
                  >
                    {product.product_design}
                  </span>
                </div>

                <div className={classes.Product__descriptionBox__specBox}>
                  <span
                    className={classes.Product__descriptionBox__specBox__icon}
                  >
                    {tag}
                  </span>
                  <span
                    className={
                      classes.Product__descriptionBox__specBox__property
                    }
                  >
                    {"کشور تولید کننده:"}
                  </span>
                  <span
                    className={classes.Product__descriptionBox__specBox__value}
                  >
                    {product.product_country}
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.Product__sellerBox}>
              <span className={classes.Product__sellerBox__text}>فروشنده</span>
              <div className={classes.Product__sellerBox__nameBox}>
                <span
                  className={classes.Product__sellerBox__nameBox__sellerIcon}
                >
                  {shop}
                </span>
                <span
                  className={classes.Product__sellerBox__nameBox__sellerName}
                >
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
                  {product.inventory === 0 ? "ناموجود" : "موجود در انبار"}
                </span>
              </div>
              <div className={classes.Product__sellerBox__featureBox}>
                <span className={classes.Product__sellerBox__featureBox__icon}>
                  {money}
                </span>
                <span className={classes.Product__sellerBox__featureBox__text}>
                  {digitsEnToFa(addCommas(product.product_off_percent))} تومان
                </span>
              </div>
              <div className={classes.Product__sellerBox__featureBox}>
                <span className={classes.Product__sellerBox__featureBox__off}>
                  {digitsEnToFa(addCommas(product.product_price))}
                </span>
              </div>
              <Button
                color="purple"
                className={
                  0 === 0
                    ? classes["Product__sellerBox__btn--disable"]
                    : classes["Product__sellerBox__btn"]
                }
                isDisable={0 === 0}
                onClickHandler={() => console.log("click add product")}
              >
                {0 === 0 ? "ناموجود" : "افزودن به سبد"}
              </Button>
            </div>
            <div className={classes.Product__similarBox}>
              <span className={classes.Product__similarBox__text}>
                محصولات مشابه
              </span>
              <div className={classes.Product__similarBox__items}>
                <SimilarItem
                  link={"./images/clothes/11bg.png"}
                  name={"شلوار مردانه سیدونا مدل MSI03072-403"}
                  price={"199999"}
                  priceOff={"200000"}
                />
                <SimilarItem
                  link={"./images/clothes/11bg.png"}
                  name={"شلوار مردانه سیدونا مدل MSI03072-403"}
                  price={"199999"}
                  priceOff={"200000"}
                />
                <SimilarItem
                  link={"./images/clothes/11bg.png"}
                  name={"شلوار مردانه سیدونا مدل MSI03072-403"}
                  price={"199999"}
                  priceOff={"200000"}
                />
                <SimilarItem
                  link={"./images/clothes/11bg.png"}
                  name={"شلوار مردانه سیدونا مدل MSI03072-403"}
                  price={"199999"}
                  priceOff={"200000"}
                />
                <SimilarItem
                  link={"./images/clothes/11bg.png"}
                  name={"شلوار مردانه سیدونا مدل MSI03072-403"}
                  price={"199999"}
                  priceOff={"200000"}
                />
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}
export default Product;
