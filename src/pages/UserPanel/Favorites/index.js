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
  let [loading, setLoading] = useState(true);
  let [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/accounts/show_favorite/`).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        setFavorites(res.data);
      }
    });
  }, []);

  function favoriteHandler(e) {
    console.log(e.target);
    console.log(e.target.id);
  }

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
          {favorites.map((element) => (
            <div
              key={element.id}
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
              <span className={classes.container__favoriteItems__item__price}>
                {digitsEnToFa(addCommas(element.product_off_percent))} تومان
              </span>
              <span
                className={classes.container__favoriteItems__item__priceOff}
              >
                {digitsEnToFa(addCommas(element.product_price))}
              </span>
              <button
                id={element.id}
                onClick={favoriteHandler.bind(element.id)}
                className={classes.container__favoriteItems__item__btn}
              >
                {trash}
                &nbsp; حذف
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Favorites;
