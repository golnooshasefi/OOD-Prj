import classes from "./Favorites.module.scss";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const trash = <FontAwesomeIcon icon={faTrashCan} />;

function Favorites() {
  return (
    <div className={classes.container}>
      {/* <h2 className={classes.header}>سفارش‌ها</h2> */}
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            لیست علاقه‌مندی‌ها
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
          <span className={classes.container__favoriteItems__item__price}>
            {digitsEnToFa(addCommas("199999"))} تومان
          </span>
          <span className={classes.container__favoriteItems__item__priceOff}>
            {digitsEnToFa(addCommas("200000"))}
          </span>
          <button className={classes.container__favoriteItems__item__btn}>
            {trash}
            &nbsp; حذف
          </button>
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
          <span className={classes.container__favoriteItems__item__price}>
            {digitsEnToFa(addCommas("199999"))} تومان
          </span>
          <span className={classes.container__favoriteItems__item__priceOff}>
            {digitsEnToFa(addCommas("200000"))}
          </span>
          <button className={classes.container__favoriteItems__item__btn}>
            {trash}
            &nbsp; حذف
          </button>
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
          <span className={classes.container__favoriteItems__item__price}>
            {digitsEnToFa(addCommas("199999"))} تومان
          </span>
          <span className={classes.container__favoriteItems__item__priceOff}>
            {digitsEnToFa(addCommas("200000"))}
          </span>
          <button className={classes.container__favoriteItems__item__btn}>
            {trash}
            &nbsp; حذف
          </button>
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
          <span className={classes.container__favoriteItems__item__price}>
            {digitsEnToFa(addCommas("199999"))} تومان
          </span>
          <span className={classes.container__favoriteItems__item__priceOff}>
            {digitsEnToFa(addCommas("200000"))}
          </span>
          <button className={classes.container__favoriteItems__item__btn}>
            {trash}
            &nbsp; حذف
          </button>
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
          <span className={classes.container__favoriteItems__item__price}>
            {digitsEnToFa(addCommas("199999"))} تومان
          </span>
          <span className={classes.container__favoriteItems__item__priceOff}>
            {digitsEnToFa(addCommas("200000"))}
          </span>
          <button className={classes.container__favoriteItems__item__btn}>
            {trash}
            &nbsp; حذف
          </button>
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
          <span className={classes.container__favoriteItems__item__price}>
            {digitsEnToFa(addCommas("199999"))} تومان
          </span>
          <span className={classes.container__favoriteItems__item__priceOff}>
            {digitsEnToFa(addCommas("200000"))}
          </span>
          <button className={classes.container__favoriteItems__item__btn}>
            {trash}
            &nbsp; حذف
          </button>
        </div>
      </div>
    </div>
  );
}
export default Favorites;
