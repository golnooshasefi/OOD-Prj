import classes from "./PaymentType.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";
import classNames from "classnames";
import * as React from "react";
// import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { purple } from "@mui/material/colors";
import { Button, TextField, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import axios from "axios";
import axiosInstance from "../../axios";

import { useState, useEffect } from "react";

import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import { useContext } from "react";
import UserContext from "../../store/UserContext";

function PaymentType() {
  const formControlLabelStyle = {
    "& .MuiFormControlLabel-label": {
      fontSize: "2rem",
    },
  };

  let [totalPrice, setTotalPrice] = useState(0);
  let [shippingPrice, setShippingPrice] = useState(0);
  let [finalPrice, setFinalPrice] = useState(0);
  let [score, setScore] = useState(0);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const toastSuccess = () => toast.success("خرید شما با موفقیت انجام شد!");
  const toastWalletError = () => toast.error("موجودی کیف پول شما کافی نیست!");
  const toastOffCode = () =>
    toast.error("اعتبار این کد تخفیف به پایان رسیده است!");

  useEffect(() => {
    axiosInstance.get(`/accounts/show_checkout_info/`).then((res) => {
      if (res.status === 200) {
        setTotalPrice(res.data.discounted_price);
        setShippingPrice(res.data.shippingPrice);
        setFinalPrice(res.data.total_cost);
        setScore(res.data.score);
      }
    });
  }, []);

  const initialFormData = {
    offcode: "",
    type: "",
  };
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handlePriceChange = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`/accounts/apply_discount/`, {
        discount_code: formData.offcode,
      })
      .then((res) => {
        if (res.status === 200) {
          setFinalPrice(res.data.discounted_total_cost);
        } else if (res.status === 204) {
          toastOffCode();
        }
      });
  };
  const handleBtnChange = (e) => {
    updateFormData({
      ...formData,
      type: e.target.value,
    });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/accounts/checkout/`, {
        type: formData.type,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          navigate("/successpay");
          // toastSuccess();
        } else if (res.status === 204) {
          toastWalletError();
        }
      });
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
        pauseOnHover
        toastStyle={{ fontSize: "16px", fontFamily: "Vazirmatn" }}
      />
      <div className={classes.header}>
        <h1 className={classes.header__title}>سبکینو</h1>
        <div>
          <ShoppingCartOutlinedIcon
            sx={{ fontSize: "2.5rem", ml: "1rem", mr: "1rem" }}
          />
          <span className={classes.header__item}>سبد خرید</span>

          <HorizontalRuleOutlinedIcon sx={{ fontSize: "2.5rem" }} />
          <CreditCardOutlinedIcon
            color="secondary"
            sx={{ fontSize: "2.5rem", ml: "1rem", mr: "1rem" }}
          />
          <span
            className={classNames(
              classes.header__item,
              classes["header__item--active"]
            )}
          >
            پرداخت
          </span>
        </div>
      </div>
      <div className={classes.Payment}>
        <form className={classes.Payment__form}>
          <div className={classes.right}>
            <div className={classes.Payment__type}>
              <h2 className={classes.Payment__header}>انتخاب روش پرداخت</h2>

              <div className={classes.Payment__radioButtons}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={formData.type}
                    onChange={handleBtnChange}
                  >
                    <FormControlLabel
                      value="wallet"
                      name="type"
                      control={
                        <Radio
                          sx={{
                            color: purple[500],
                            "&.Mui-checked": {
                              color: purple[500],
                            },
                          }}
                        />
                      }
                      label="کیف پول"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                        },
                        ...formControlLabelStyle,
                      }}
                    />
                    <span className={classes.balance}>موجودی</span>
                    <span className={classes.balance}>
                      {digitsEnToFa(addCommas(user.balance))}
                    </span>
                    <span className={classes.balance}>تومان</span>

                    <FormControlLabel
                      value="online"
                      control={
                        <Radio
                          sx={{
                            color: purple[500],
                            "&.Mui-checked": {
                              color: purple[500],
                            },
                          }}
                        />
                      }
                      label="پرداخت اینترنتی"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                        },
                        ...formControlLabelStyle,
                        mt: 2,
                      }}
                    />
                    <FormControlLabel
                      value="home"
                      control={
                        <Radio
                          sx={{
                            color: purple[500],
                            "&.Mui-checked": {
                              color: purple[500],
                            },
                          }}
                        />
                      }
                      label="پرداخت در محل"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                        },
                        ...formControlLabelStyle,
                        mt: 2,
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className={classes.Payment__off}>
              <h2 className={classes.Payment__header}>کد تخفیف</h2>
              <div>
                <TextField
                  onChange={handleChange}
                  name="offcode"
                  value={formData.offcode}
                  id="standard-basic"
                  label="کد تخفیف"
                  color="secondary"
                  variant="standard"
                  inputProps={{ style: { fontSize: 20 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  sx={{
                    width: { sm: 300, md: 300 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                />
              </div>
              <div>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ width: 150, padding: 1, margin: 2, fontSize: 18 }}
                  onClick={handlePriceChange}
                >
                  اعمال کد تخفیف
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.left}>
            <div
              className={classNames(classes.left__price, classes.left__items)}
            >
              <span>قیمت کالاها</span>
              <span>{digitsEnToFa(totalPrice)}</span>
              <span>تومان</span>
            </div>
            <div
              className={classNames(
                classes.left__shipping,
                classes.left__items
              )}
            >
              <span>هزینه ارسال</span>
              <span>{digitsEnToFa(shippingPrice)}</span>
              <span>تومان</span>
            </div>
            {/* <div
              className={classNames(classes.left__amount, classes.left__items)}
            >
              <span>تعداد کالاها</span>
              <span>4 کالا</span>
            </div> */}
            <div
              className={classNames(
                classes.left__items,
                classes.left__finalprice
              )}
            >
              <span>مبلغ قابل پرداخت</span>
              <span>{digitsEnToFa(finalPrice)}</span>
              <span>تومان</span>
            </div>
            <div
              className={classNames(
                classes.left__shipping,
                classes.left__items
              )}
            >
              <span>امتیاز شما از این خرید</span>

              <span>{digitsEnToFa(score)}</span>
            </div>
            <Button
              className="left__submitbtn"
              type="submit"
              variant="outlined"
              color="secondary"
              sx={{ mt: 3, mb: 2, width: 150, height: 50, fontSize: 20 }}
              onClick={handleSumbit}
            >
              پرداخت
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PaymentType;
