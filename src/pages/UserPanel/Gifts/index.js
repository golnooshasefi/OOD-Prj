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
import { useQuery } from "react-query";

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;
async function getGifts() {
  return await axiosInstance.get("/gifts/show_gift/").then((res) => res.data);
}
function Gifts() {
  const { data: gifts, isLoading, status } = useQuery("gifts", getGifts);

  const { user } = useContext(UserContext);

  return (
    <div className={classes.container}>
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            جوایز
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
        <>
          <div className={classes.container__score}>
            <span className={classes["container__score--text"]}>
              امتیاز شما:{" "}
            </span>
            <span> {digitsEnToFa(addCommas(user.score))}</span>
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
