import styled from "styled-components";
import classes from "./item.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartReqular } from "@fortawesome/free-regular-svg-icons";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
const heart = <FontAwesomeIcon icon={faHeart} />;
const heartRegular = <FontAwesomeIcon icon={faHeartReqular} />;

function Item(props) {
  return (
    <div className={classes.item}>
      <div className={classes.item__imgContainer}>
        {/* <i className={classes.item__imgContainer__icon}>
          {false ? heart : heartRegular}
        </i> */}
        <img
          src={props.img}
          alt={props.name}
          className={classes.item__imgContainer__img}
        />
      </div>
      <div className={classes.item__description}>
        <h2 className={classes.item__description__name}>{props.name}</h2>
        <div className={classes.item__description__priceContainer}>
          <span className={classes.item__description__priceContainer__price}>
            {digitsEnToFa(addCommas(props.priceOff))}
          </span>
          <span className={classes.item__description__priceContainer__toman}>
            تومان
          </span>
        </div>
        <div className={classes.item__description__priceContainer}>
          {props.price !== 0 && (
            <span
              className={classes.item__description__priceContainer__priceOff}
            >
              {digitsEnToFa(addCommas(props.price))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
