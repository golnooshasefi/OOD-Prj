import classes from "./SimilarItem.module.scss";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";

function SimilarItem({ link, name, price, priceOff }) {
  return (
    <div className={classes.SimilarItem}>
      <img className={classes.SimilarItem__pic} src={link} alt={name} />
      <span className={classes.SimilarItem__name}>{name}</span>
      <span className={classes.SimilarItem__price}>
        {digitsEnToFa(addCommas(price))} تومان
      </span>
      <span className={classes.SimilarItem__priceOff}>
        {digitsEnToFa(addCommas(priceOff))}
      </span>
    </div>
  );
}

export default SimilarItem;
