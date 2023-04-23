import CelebrationIcon from "@mui/icons-material/Celebration";
import { useNavigate } from "react-router-dom";
import classes from "./successfulPay.module.scss";

function SuccessPay() {
  <div className={classes.container}>
    <div className={classes.container__box}>
      <CelebrationIcon />
      <span>خرید شما با موفقیت انجام شد!</span>
      <button className={classes["container__box--btn"]}></button>
    </div>
  </div>
}

export default SuccessPay;
