import { useState } from "react";
import classes from "./RegisterConfirm.module.scss";
import ReactCodeInput from "react-code-input";
import axiosInstance from "../../../axios";

function RegisterConfirm() {
  const [code, setCode] = useState("");

  const handlePinChange = (code) => {
    setCode(code);
    console.log(code);
  };

  const handleSubmit = () => {
    axiosInstance
      .post("", {
        confCode: code,
      })
      .then((res) => {
        if (res.status === 200) {
        } else if (res.status === 400) {
        }
      });
  };
  const props = {
    // fields: 4,
    inputStyle: {
      fontFamily: "monospace",
      margin: "4px",
      MozAppearance: "textfield",
      width: "50px",
      borderRadius: "5px",
      fontSize: "30px",
      height: "50px",
      paddingLeft: "7px",
      backgroundColor: "white",
      color: "#b197fc",
      border: "1px solid #adb5bd",
      boxShadow: "0 0 3px rgba(15, 15, 15, 0.28)",
    },
    inputStyleInvalid: {
      fontFamily: "monospace",
      margin: "4px",
      MozAppearance: "textfield",
      width: "40px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "26px",
      paddingLeft: "7px",
      backgroundColor: "black",
      color: "red",
      border: "1px solid red",
    },
  };
  return (
    <div className={classes.container}>
      <div className={classes.container__box}>
        <h1 className={classes["container__box--logo"]}>سبکینو</h1>
        <h2 className={classes["container__box--heading"]}>
          کد ارسال شده به ایمیل خود را وارد کنید.
        </h2>
        {/* <form> */}
        <div className={classes.input}>
          <ReactCodeInput
            id="confirmCode"
            type="text"
            // isValid={isPinCodeValid}
            fields={6}
            {...props}
            onChange={handlePinChange}
            value={code}
          />
        </div>
        <button
          disabeled={code.length < 6}
          className={
            code.length < 6
              ? classes["container__box--submitbtn--disabeled"]
              : classes["container__box--submitbtn"]
          }
          onClick={handleSubmit}
        >
          تایید
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default RegisterConfirm;
