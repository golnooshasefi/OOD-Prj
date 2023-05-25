import Footer from "../../components/layout/Footer";
import MainNavigation from "../../components/layout/MainNavigation";
import Button from "../../components/shared/Button";
import classes from "./Product.module.scss";
import { useParams, Link } from "react-router-dom";
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
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [similar, setSimilar] = useState([]);
  console.log(similar);
  console.log("shop id" + product.shop);

  const Stars = {
    size: 25,
    count: 5,
    color: "#868e96",
    activeColor: "#6667ab",
    value: product.score,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
      console.log([product.id, newValue]);
      axiosInstance
        .post(`/accounts/vote_for_product/`, {
          data: [product.id, newValue],
        })
        .then((res) => {
          if (res.status === 200) {
            setProduct((prev) => ({ ...prev, is_favorite: false }));
          }
        });
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

      // axiosInstance.get(`/questions/similar/${productId}/`).then((res) => {
      //   if (res.status === 200) {
      //     console.log(res);
      //     console.log(res.data);
      //     setSimilar(res.data);
      //     setLoading(false);
      //   }
      // });
    } else {
      // navigate("/404", { replace: true });
    }
  }, [productId]);

  // useEffect(() => {
  //   if (productId) {
  //     axiosInstance.get(`/questions/similar/${productId}/`).then((res) => {
  //       if (res.status === 200) {
  //         console.log(res);
  //         console.log(res.data);
  //         setSimilar(res.data);
  //         setLoading(false);
  //       }
  //     });
  //   } else {
  //     // navigate("/404", { replace: true });
  //   }
  // }, [productId]);

  const favoriteHandler = () => {
    console.log(product);
    if (product.is_favorite) {
      axiosInstance
        .post(`accounts/delete_from_favorite/`, {
          data: product.id,
        })
        .then((res) => {
          if (res.status === 200) {
            setProduct((prev) => ({ ...prev, is_favorite: false }));
          }
        });
    } else {
      axiosInstance
        .post(`accounts/add_to_favorite/`, {
          data: product.id,
        })
        .then((res) => {
          if (res.status === 200) {
            setProduct((prev) => ({ ...prev, is_favorite: true }));
          }
        });
    }
  };

  const addProductHandler = () => {
    if (product.is_in_cart) {
      axiosInstance
        .post(`accounts/delete_from_cart/`, {
          data: product.id,
        })
        .then((res) => {
          if (res.status === 200) {
            setProduct((prev) => ({ ...prev, is_in_cart: false }));
          }
        });
    } else {
      axiosInstance
        .post(`accounts/add_to_cart/`, {
          data: product.id,
        })
        .then((res) => {
          if (res.status === 200) {
            setProduct((prev) => ({ ...prev, is_in_cart: true }));
          }
        });
    }
  };

  return (
    <>
      <MainNavigation />
      <div className={classes.container}>
        {!loading && (
          <>
            <SyncLoader
              color="#6667ab"
              loading={loading}
              css={override}
              size={15}
              margin={2}
              data-testid="loader"
            />

            <section className={classes.Product}>
              <div className={classes.Product__imgBox}>
                <img
                  className={classes.Product__imgBox__img}
                  src={product.product_image}
                  alt={product.product_name}
                ></img>
                {!product.is_favorite && (
                  <span
                    className={classes.Product__imgBox__regular}
                    onClick={favoriteHandler}
                  >
                    {heart}
                  </span>
                )}
                {product.is_favorite && (
                  <span
                    onClick={favoriteHandler}
                    className={classes.Product__imgBox__solid}
                  >
                    {heartSolid}
                  </span>
                )}
              </div>
              <div className={classes.Product__descriptionBox}>
                <span className={classes.Product__descriptionBox__name}>
                  {product.product_name}
                </span>
                {/* <div className={classes.Product__descriptionBox__starBox}>
                <ReactStars {...Stars} />
              </div> */}

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
                      className={
                        classes.Product__descriptionBox__specBox__value
                      }
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
                      className={
                        classes.Product__descriptionBox__specBox__value
                      }
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
                      className={
                        classes.Product__descriptionBox__specBox__value
                      }
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
                      className={
                        classes.Product__descriptionBox__specBox__value
                      }
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
                      className={
                        classes.Product__descriptionBox__specBox__value
                      }
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
                      className={
                        classes.Product__descriptionBox__specBox__value
                      }
                    >
                      {product.product_country}
                    </span>
                  </div>
                </div>
              </div>
              <div className={classes.Product__sellerBox}>
                <span className={classes.Product__sellerBox__text}>
                  فروشنده
                </span>
                <div className={classes.Product__sellerBox__nameBox}>
                  <span
                    className={classes.Product__sellerBox__nameBox__sellerIcon}
                  >
                    {shop}
                  </span>
                  {/* <Link to={`/shop-page/${product.shop}`}> */}
                  <span
                    className={classes.Product__sellerBox__nameBox__sellerName}
                  >
                    بزرگ
                  </span>
                  {/* </Link> */}
                </div>
                <div className={classes.Product__sellerBox__featureBox}>
                  <span
                    className={classes.Product__sellerBox__featureBox__icon}
                  >
                    {shield}
                  </span>
                  <span
                    className={classes.Product__sellerBox__featureBox__text}
                  >
                    گارانتی اصالت و سلامت فیزیکی کالا
                  </span>
                </div>
                <div className={classes.Product__sellerBox__featureBox}>
                  <span
                    className={classes.Product__sellerBox__featureBox__icon}
                  >
                    {check}
                  </span>
                  <span
                    className={classes.Product__sellerBox__featureBox__text}
                  >
                    {product.inventory === 0 ? "ناموجود" : "موجود در انبار"}
                  </span>
                </div>
                <div className={classes.Product__sellerBox__featureBox}>
                  <span
                    className={classes.Product__sellerBox__featureBox__icon}
                  >
                    {money}
                  </span>
                  <span
                    className={classes.Product__sellerBox__featureBox__text}
                  >
                    {digitsEnToFa(addCommas(product.product_price))} تومان
                  </span>
                </div>
                <div className={classes.Product__sellerBox__featureBox}>
                  {product.product_off_percent !== 0 && (
                    <span
                      className={classes.Product__sellerBox__featureBox__off}
                    >
                      {digitsEnToFa(addCommas(product.product_off_percent))}
                    </span>
                  )}
                </div>
                <Button
                  color="purple"
                  className={
                    product.inventory === 0
                      ? classes["Product__sellerBox__btn--disable"]
                      : classes["Product__sellerBox__btn"]
                  }
                  isDisable={product.inventory === 0}
                  onClickHandler={addProductHandler}
                >
                  {product.inventory === 0
                    ? "ناموجود"
                    : !product.is_in_cart
                    ? "افزودن به سبد"
                    : " حذف از سبد"}
                </Button>
              </div>
              {/* <div className={classes.Product__similarBox}>
              <span className={classes.Product__similarBox__text}>
                محصولات مشابه
              </span>
              <div className={classes.Product__similarBox__items}>
                {similar.map((element) => (
                  <SimilarItem
                    link={element.upload}
                    name={"شلوار مردانه سیدونا مدل MSI03072-403"}
                    price={"199999"}
                    priceOff={"200000"}
                  />
                ))}
                
              </div>
            </div> */}
            </section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
export default Product;
