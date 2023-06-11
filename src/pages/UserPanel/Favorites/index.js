import classes from "./Favorites.module.scss";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axios";
import { BeatLoader } from "react-spinners";
import { useQuery } from "react-query";

const trash = <FontAwesomeIcon icon={faTrashCan} />;

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function getFavorites() {
    const res = await axiosInstance.get("/favoriteProducts/show_favorite/");
    setFavorites(res.data);
    return res.data;
  }

  const { data, isLoading, status } = useQuery("favorites", getFavorites);

  function favoriteHandler(e) {
    console.log(e.target);
    console.log(e.target.id + "");

    axiosInstance
      .post(`/favoriteProducts/delete_from_favorite/`, {
        data: e.target.id,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(favorites);
          favorites.map((el) => console.log(Number(el.id)));
          setFavorites((prev) => prev.filter((el) => el.id != e.target.id));
          console.log(favorites);
        }
      });
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
                {digitsEnToFa(addCommas(element.product_price))} تومان
              </span>
              {element.product_off_percent !== 0 && (
                <span
                  className={classes.container__favoriteItems__item__priceOff}
                >
                  {digitsEnToFa(addCommas(element.product_off_percent))}
                </span>
              )}

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
