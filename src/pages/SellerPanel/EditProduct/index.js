import classes from "./EditProduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const trash = <FontAwesomeIcon icon={faTrashCan} />;
const edit = <FontAwesomeIcon icon={faPenToSquare} />;

function EditProduct() {
  return (
    <div className={classes.container}>
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            ویرایش کالا
          </span>
        </div>
      </div>
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
    </div>
  );
}
export default EditProduct;
