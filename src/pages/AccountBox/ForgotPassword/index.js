import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Marginer } from "../../../components/marginer";
import classes from "./ForgotPassword.module.scss";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../store/UserContext";
import axiosInstance from "../../../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const notifySuccess = () => {
    toast.success("لطفا ایمیل خود را چک کنید.", {
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
  const navigate = useNavigate();

  let { user } = useContext(UserContext);

  useEffect(() => {
    if (user.auth) {
      navigate("/");
    }
  }, [user.auth, navigate]);

  const initialFormData = Object.freeze({
    email: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axiosInstance
      .post(`accounts/receive_email_for_recover_password/`, {
        email: formData.email,
      })
      .then((res) => {
        notifySuccess();
        // navigate("/");
      });
    console.log(formData);
  };

  return (
    <div className={classes.appContainer}>
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
      <div className={classes.appContainer__boxContainer}>
        <div className={classes.appContainer__boxContainer__topContainer}>
          <div
            className={
              classes.appContainer__boxContainer__topContainer__backDrop
            }
          />
          <div
            className={
              classes.appContainer__boxContainer__topContainer__headerContainer
            }
          >
            <h2
              className={
                classes.appContainer__boxContainer__topContainer__headerContainer__headerText
              }
            >
              <Link
                className={
                  classes.appContainer__boxContainer__topContainer__headerContainer__headerText__link
                }
                to={"/"}
              >
                سبکینو
              </Link>
            </h2>

            <span
              className={
                classes.appContainer__boxContainer__topContainer__headerContainer__bigText
              }
            >
              خوش آمدید
            </span>
            <span
              className={
                classes.appContainer__boxContainer__topContainer__headerContainer__smallText
              }
            >
              لطفا برای بازیابی، ایمیل خود را وارد کنید.
            </span>
          </div>
        </div>
        <div className={classes.appContainer__boxContainer__innerContainer}>
          <input
            className={
              classes.appContainer__boxContainer__innerContainer__input
            }
            type="email"
            placeholder="ایمیل"
            autoFocus
            onChange={handleChange}
            name="email"
          />
          <Marginer direction="vertical" margin={20} />
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={!formData.email}
            className={
              !formData.email
                ? classes.appContainer__boxContainer__innerContainer__btn__disable
                : classes.appContainer__boxContainer__innerContainer__btn
            }
          >
            بازیابی
          </button>
          <Marginer direction="vertical" margin={30} />
          <span
            className={
              classes.appContainer__boxContainer__innerContainer__boldLink
            }
            onClick={() => navigate("/account-box")}
          >
            ورود | ثبت‌نام
          </span>
        </div>
      </div>
    </div>
  );
}
