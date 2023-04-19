import { useEffect, useState } from "react";
import classes from "./Gifts.module.scss";
import classNames from "classnames";

import { useContext } from "react";
import UserContext from "../../../store/UserContext";

import { Button, ThemeProvider, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import axiosInstance from "../../../axios";

function Gifts() {
  const { user } = useContext(UserContext);

  let [loading, setLoading] = useState(true);
  let [score, setScore] = useState(0);
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    axiosInstance.get(``).then((res) => {
      if (res.status === 200) {
        setGifts(res.data);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            جوایز
          </span>
        </div>
      </div>
      <div className={classes.container__score}>
        <span className={classes["container__score--text"]}>امتیاز شما: </span>
        <span> {digitsEnToFa(addCommas(user.score))}</span>
      </div>

      <div className={classes.container__gifts}>
        {gifts.map((element) => {
          <div className={classes["container__gifts--box"]}>
            <div>
              <div className={classes["container__gifts--box-header"]}>
                {element.description}
              </div>
              <i
                className={classNames(
                  classes["container__gifts--box-icon"],
                  "fa-regular fa-star"
                )}
              ></i>
              <span>{element.score}</span>
              <span> امتیاز</span>
            </div>
            {/* <button className={classes["container__gifts--box-btn"]}></button> */}
            <Button
              variant="contained"
              disabled
              color="success"
              sx={{ fontSize: 17 }}
            >
              دریافت کد تخفیف
            </Button>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Gifts;
