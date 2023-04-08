import classes from "./PaymentType.module.scss";
import MainNavigation from "../../components/layout/MainNavigation";

import classNames from "classnames";
import * as React from "react";
// import React, { useContext, useState } from "react";
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

function PaymentType() {
  React.useEffect(() => {
    // axiosInstance.get(`/Accounts/ConfigGetHomeDir/`).then((res) => {
    //   if(res.status === 200) {
    //     setCurrentDirectory(res.data.HomeDir)
    //   }
    //   else {
    //     setErrorCurrentDirectory(true);
    //   }
    // })
    // .catch((err) => {
    //   setErrorCurrentDirectory(true);
    // });
  }, []);
  const initialFormData = {
    offcode: "",
    type: "",
  };
  const [formData, updateFormData] = React.useState(initialFormData);

  const formControlLabelStyle = {
    "& .MuiFormControlLabel-label": {
      fontSize: "2rem",
    },
  };

  const handleBtnChange = (e) => {
    updateFormData({
      ...formData,
      type: e.target.value,
    });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    // axiosInstance
    //   .post(`accounts/register/`, {
    //     username: formData.username,
    //     email: formData.email,
    //     type: formData.type,
    //     password: formData.password,
    //   })
    //   .then((res) => {
    //     console.log(res)
    //     if (res.status === 200) {
    //       login(res.data.type, res.data.username);
    //       localStorage.setItem("access_token", res.data.access);
    //       localStorage.setItem("refresh_token", res.data.refresh);
    //       axiosInstance.defaults.headers.common["Authorization"] =
    //         "Bearer " + localStorage.getItem("access_token");
    //       navigate("/panel");
    //     }
    //   });
  };

  return (
    <>
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
                    onChange={handleBtnChange}
                  >
                    <FormControlLabel
                      value="female"
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
                    <span className={classes.balance}>موجودی 0 تومان</span>

                    <FormControlLabel
                      value="male"
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
                      value="other"
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
              <TextField
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
          </div>
          <div className={classes.left}>
            <div
              className={classNames(classes.left__price, classes.left__items)}
            >
              <span>قیمت کالاها</span>
              <span>100 هزار تومان</span>
            </div>
            <div
              className={classNames(
                classes.left__shipping,
                classes.left__items
              )}
            >
              <span>هزینه ارسال</span>
              <span>30 هزار تومان</span>
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
              <span>130 هزار تومان</span>
            </div>
            <div
              className={classNames(
                classes.left__shipping,
                classes.left__items
              )}
            >
              <span>امتیاز شما از این خرید</span>
              <CardGiftcardIcon />
              <span>100</span>
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
