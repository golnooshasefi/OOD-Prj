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
  const { user, updateScore } = useContext(UserContext);

  let [loading, setLoading] = useState(true);
  // let [score, setScore] = useState(0);
  const [gifts, setGifts] = useState([]);
  const [offCode, setOffCode] = useState();
  const [available, setAvailable] = useState(false);

  // const offCodeHandler = (escore) => {
  //   axiosInstance.post(`/accounts/get_gift/`, { score: escore }).then((res) => {
  //     if (res.status === 200) {
  //       setAvailable(true);
  //       setOffCode(res.data.discount_code);
  //       updateScore(res.data.new_score);
  //       setLoading(false);
  //     }
  //   });
  // };

  useEffect(() => {
    axiosInstance.get(`/accounts/show_gift/`).then((res) => {
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
      <BeatLoader color="#6667ab" loading={loading} css={override} size={30} />
      {!loading && (
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
