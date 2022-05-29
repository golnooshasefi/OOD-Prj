import classes from "./EditProduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axios";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
const trash = <FontAwesomeIcon icon={faTrashCan} />;
const edit = <FontAwesomeIcon icon={faPenToSquare} />;

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function EditProduct() {
  let [loading, setLoading] = useState(false);
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get(``).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        setProducts(res.data);
      }
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            ویرایش کالا
          </span>
        </div>
      </div>
      <BeatLoader color="#6667ab" loading={loading} css={override} size={30} />
      {!loading && (
        <div className={classes.container__favoriteItems}>
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
        </div>
      )}
    </div>
  );
}
export default EditProduct;
