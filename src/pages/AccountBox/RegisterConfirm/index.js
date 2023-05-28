import { useState } from "react";
import classes from "./RegisterConfirm.module.scss";
import ReactCodeInput from "react-code-input";
import axiosInstance from "../../../axios";
import UserContext from "../../../store/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterConfirm() {
  const notifySuccess = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifyError = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [code, setCode] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handlePinChange = (code) => {
    setCode(code);
    console.log(code);
  };

  const handleSubmit = () => {
    axiosInstance
      .post("accounts/verify_email/", {
        code: code,
      })
      .then((res) => {
        if (res.status === 200) {
          // notifySuccess("ثبت نام شما با موفقیت انجام گرفت. لطفا وارد شوید.");
          login(
            res.data.type,
            res.data.username,
            res.data.user_phone_number,
            res.data.email,
            res.data.balance,
            res.data.score
          );
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 404) {
          notifyError("کد وارد شده، اشتباه است.");
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
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{ fontSize: "16px", fontFamily: "Vazirmatn" }}
      />
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
    </>
  );
}

export default RegisterConfirm;
