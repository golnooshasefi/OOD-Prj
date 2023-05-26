import { useEffect, useState } from "react";
import classes from "./Gifts.module.scss";
import classNames from "classnames";

import Giftcard from "./giftcard";

import { useContext } from "react";
import UserContext from "../../../store/UserContext";

import { Button, ThemeProvider, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import axiosInstance from "../../../axios";

import { BeatLoader } from "react-spinners";

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function Gifts() {
  console.log("hello");
  // const { user, updateScore } = useContext(UserContext);

  // const [loading, setLoading] = useState(true);
  const [gifts, setGifts] = useState([]);

  console.log("loading state");
  // console.log(loading);

  console.log("gifts state");
  console.log(gifts);

  // console.log("user state");
  // console.log(user);

  useEffect(() => {
    axiosInstance.get(`/gifts/show_gift/`).then((res) => {
      if (res.status === 200) {
        setGifts(res.data);
        // setLoading(false);
      } else if (res.status === 204) {
        // setLoading(false);
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
      <div data-testid="loader" className={classes.container__loader}>
        {/* {!loading && gifts.length === 0 && (
        <span>جایزه‌ای برای نمایش وجود ندارد.</span>
      )} */}
        {/* <BeatLoader
          // data-testid="loader"
          color="#6667ab"
          loading={loading}
          css={override}
          size={30}
          className={classes.beatLoader}
        /> */}
      </div>
      {gifts.length !== 0 && (
        <>
          <div className={classes.container__score}>
            <span className={classes["container__score--text"]}>
              امتیاز شما:{" "}
            </span>
            {/* <span> {digitsEnToFa(addCommas(user.score))}</span> */}
          </div>

          {gifts.map((element) => (
            <div className={classes.container__gifts}>
              <Giftcard
                description={element.description}
                score={element.score}
                date={element.date}
              />
            </div>
          ))}
        </>
      )}

      {/* )} */}
    </div>
  );
}

export default Gifts;
