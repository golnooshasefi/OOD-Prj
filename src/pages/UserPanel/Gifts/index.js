import { useEffect, useState } from "react";
import classes from "./Gifts.module.scss";
import classNames from "classnames";

import { Button, ThemeProvider, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";

function Gifts() {
  let [loading, setLoading] = useState(true);
  let [score, setScore] = useState(0);
  useEffect(() => {
    // axiosInstance.get(``).then((res) => {
    //   if (res.status === 200) {
    //     console.log(res.data.score);
    //     setScore(res.data.score);
    //     setLoading(false);
    //   }
    // });
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
        <span> {digitsEnToFa(addCommas({ score }))}</span>
      </div>

      <div className={classes.container__gifts}>
        <div className={classes["container__gifts--box"]}>
          <div>
            <div className={classes["container__gifts--box-header"]}>
              کد تخفیف 20 درصدی برای خرید انواع کالا
            </div>
            <i
              className={classNames(
                classes["container__gifts--box-icon"],
                "fa-regular fa-star"
              )}
            ></i>
            <span>100 امتیاز</span>
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
        </div>
        <div className={classes["container__gifts--box"]}>
          <div>
            <div className={classes["container__gifts--box-header"]}>
              کد تخفیف 20 درصدی برای خرید انواع کالا
            </div>
            <i
              className={classNames(
                classes["container__gifts--box-icon"],
                "fa-regular fa-star"
              )}
            ></i>
            <span>100 امتیاز</span>
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
        </div>
        <div className={classes["container__gifts--box"]}>
          <div>
            <div className={classes["container__gifts--box-header"]}>
              کد تخفیف 20 درصدی برای خرید انواع کالا
            </div>
            <i
              className={classNames(
                classes["container__gifts--box-icon"],
                "fa-regular fa-star"
              )}
            ></i>
            <span>100 امتیاز</span>
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
        </div>
      </div>
    </div>
  );
}

export default Gifts;
