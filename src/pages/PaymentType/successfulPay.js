import CelebrationIcon from "@mui/icons-material/Celebration";
import { useNavigate } from "react-router-dom";
import classes from "./successfulPay.module.scss";
import { Button } from "@mui/material";

function SuccessPay() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/user-panel");
  };
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.container__box}>
          <CelebrationIcon fontSize="5rem" color="purple" />
          <span className={classes["container__box--txt"]}>
            خرید شما با موفقیت انجام شد!
          </span>
        </div>
        <span className={classes.info}>
          برای بازگشت به پنل کاربری روی دکمه زیر کلیک کنید.
        </span>
        <button className={classes.btn} onClick={clickHandler}>
          بازگشت
        </button>
      </div>
    </div>
  );
}

export default SuccessPay;
