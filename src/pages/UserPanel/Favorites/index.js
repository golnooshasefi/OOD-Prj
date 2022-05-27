import classes from "./Favorites.module.scss";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axios";
import { BeatLoader } from "react-spinners";
const trash = <FontAwesomeIcon icon={faTrashCan} />;

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function Favorites() {
  let [loading, setLoading] = useState(false);
  let [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axiosInstance.get(``).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        setFavorites(res.data);
      }
    });
  }, []);

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
      )}
    </div>
  );
}
export default Favorites;
