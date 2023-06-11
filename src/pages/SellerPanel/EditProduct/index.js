import classes from "./EditProduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axios";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const trash = <FontAwesomeIcon icon={faTrashCan} />;
const edit = <FontAwesomeIcon icon={faPenToSquare} />;

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function EditProduct() {
  let [loading, setLoading] = useState(true);
  let [products, setProducts] = useState([]);

  async function getProductsOfShop() {
    const res = await axiosInstance.get("/products/show_products_of_shop/");
    setProducts(res.data.products);
    return res.data.products;
  }

  const { data, isLoading, status } = useQuery("orders", getProductsOfShop);

  function deleteProductHandler(e) {
    console.log(e.target);
    console.log(e.target.id + "");

    axiosInstance
      .delete(`/products/delete_product/${e.target.id}/`)
      .then((res) => {
        if (res.status === 200) {
          console.log(products);
          products.map((el) => console.log(Number(el.id)));
          setProducts((prev) => prev.filter((el) => el.id != e.target.id));
          console.log(products);
        }
      });
  }

  return (
    <div className={classes.container}>
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            ویرایش کالا
          </span>
        </div>
      </div>
      <BeatLoader
        color="#6667ab"
        loading={isLoading}
        css={override}
        size={30}
      />
      {status === "success" && (
        <div className={classes.container__favoriteItems}>
          {data.map((element) => (
            <div
              id={element.id}
              className={classes.container__favoriteItems__item}
            >
              <img
                className={classes.container__favoriteItems__item__pic}
                src={element.upload}
                alt={element.product_name}
              />
              <span className={classes.container__favoriteItems__item__name}>
                {element.product_name}
              </span>
              <div className={classes.container__favoriteItems__item__btns}>
                <Link to={`${element.id}`}>
                  <button
                    className={
                      classes.container__favoriteItems__item__btns__btn
                    }
                  >
                    {edit}
                    &nbsp; ویرایش
                  </button>
                </Link>
                <button
                  id={element.id}
                  className={classes.container__favoriteItems__item__btns__btn}
                  onClick={deleteProductHandler}
                >
                  {trash}
                  &nbsp; حذف
                </button>
              </div>
            </div>
          ))}
          {/* <div className={classes.container__favoriteItems__item}>
            <img
              className={classes.container__favoriteItems__item__pic}
              src={"./images/clothes/11bg.png"}
              alt={"fake"}
            />
            <span className={classes.container__favoriteItems__item__name}>
              {"شلوار مردانه سیدونا مدل MSI03072-403"}
            </span>
            <div className={classes.container__favoriteItems__item__btns}>
              <Link to={`edit-product/${1}`}>
                <button
                  className={classes.container__favoriteItems__item__btns__btn}
                >
                  {edit}
                  &nbsp; ویرایش
                </button>
              </Link>
              <button
                className={classes.container__favoriteItems__item__btns__btn}
              >
                {trash}
                &nbsp; حذف
              </button>
            </div>
          </div> */}
          {/* <div className={classes.container__favoriteItems__item}>
            <img
              className={classes.container__favoriteItems__item__pic}
              src={"./images/clothes/11bg.png"}
              alt={"fake"}
            />
            <span className={classes.container__favoriteItems__item__name}>
              {"شلوار مردانه سیدونا مدل MSI03072-403"}
            </span>
            <div className={classes.container__favoriteItems__item__btns}>
              <button
                className={classes.container__favoriteItems__item__btns__btn}
              >
                {edit}
                &nbsp; ویرایش
              </button>
              <button
                className={classes.container__favoriteItems__item__btns__btn}
              >
                {trash}
                &nbsp; حذف
              </button>
            </div>
          </div>
          <div className={classes.container__favoriteItems__item}>
            <img
              className={classes.container__favoriteItems__item__pic}
              src={"./images/clothes/11bg.png"}
              alt={"fake"}
            />
            <span className={classes.container__favoriteItems__item__name}>
              {"شلوار مردانه سیدونا مدل MSI03072-403"}
            </span>
            <div className={classes.container__favoriteItems__item__btns}>
              <button
                className={classes.container__favoriteItems__item__btns__btn}
              >
                {edit}
                &nbsp; ویرایش
              </button>
              <button
                className={classes.container__favoriteItems__item__btns__btn}
              >
                {trash}
                &nbsp; حذف
              </button>
            </div>
          </div>
          <div className={classes.container__favoriteItems__item}>
            <img
              className={classes.container__favoriteItems__item__pic}
              src={"./images/clothes/11bg.png"}
              alt={"fake"}
            />
            <span className={classes.container__favoriteItems__item__name}>
              {"شلوار مردانه سیدونا مدل MSI03072-403"}
            </span>
            <div className={classes.container__favoriteItems__item__btns}>
              <button
                className={classes.container__favoriteItems__item__btns__btn}
              >
                {edit}
                &nbsp; ویرایش
              </button>
              <button
                className={classes.container__favoriteItems__item__btns__btn}
              >
                {trash}
                &nbsp; حذف
              </button>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}
export default EditProduct;
