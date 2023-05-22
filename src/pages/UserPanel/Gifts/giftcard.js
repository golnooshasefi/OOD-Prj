import { useState, useContext } from "react";
import axiosInstance from "../../../axios";
import classes from "./giftcard.module.scss";
import classNames from "classnames";
import { Button } from "@mui/material";
import UserContext from "../../../store/UserContext";

function Giftcard(props) {
  const { user, updateScore } = useContext(UserContext);
  const [offcode, setOffCode] = useState();

  const offCodeHandler = (escore) => {
    axiosInstance.post(`/gifts/get_gift/`, { score: escore }).then((res) => {
      if (res.status === 200) {
        setOffCode(res.data.discount_code);
        updateScore(res.data.new_score);
      }
    });
  };
  return (
    <div className={classes["container__gifts--box"]}>
      <div className={classes.gift}>
        <div>
          <div className={classes["container__gifts--box-header"]}>
            {props.description}
          </div>
          <i
            className={classNames(classes["gift__icon"], "fa-regular fa-star")}
          ></i>
          <span>{props.score}</span>
          <span> امتیاز</span>
          <div>
            <i
              className={classNames(
                classes["gift__icon"],
                "fa-regular fa-calendar"
              )}
            ></i>
            <span>{props.date}</span>
          </div>
        </div>
        {!offcode && (
          <Button
            variant="contained"
            disabled={user.score < props.score}
            color="success"
            sx={{ fontSize: 17 }}
            onClick={() => {
              offCodeHandler(props.score);
            }}
          >
            دریافت کد تخفیف
          </Button>
        )}
        {offcode && <div className={classes.offCode__container}>{offcode}</div>}
      </div>
    </div>
  );
}

export default Giftcard;
