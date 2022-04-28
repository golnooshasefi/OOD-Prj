import React, { useState, useContext } from "react";
import classes from "./login.module.scss";
import UserContext from "../../store/UserContext";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../../components/marginer";
import { AccountContext } from "./accountContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const eye = <FontAwesomeIcon icon={faEye} />;
const eye_slash = <FontAwesomeIcon icon={faEyeSlash} />;

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const { login } = useContext(UserContext);
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    // console.log(e.target.name);
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // console.log("before axios");
    axiosInstance
      .post(`accounts/register/`, {
        username: formData.fullName,
        email: formData.email,
        user_phone_number: formData.phoneNumber,
        password: formData.password,
      })
      .then((res) => {
        login(formData.email);
        navigate(-1);
        // history.push("/login");
        // console.log("axios");
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          name="fullName"
          type="text"
          placeholder="نام و نام‌خانوادگی"
          autoFocus
          onChange={handleChange}
        />
        <Marginer direction="vertical" margin={10} />
        <Input
          name="email"
          type="email"
          placeholder="ایمیل"
          onChange={handleChange}
        />
        <Marginer direction="vertical" margin={10} />
        <Input
          name="phoneNumber"
          type="tel"
          placeholder="شماره موبایل"
          onChange={handleChange}
        />
        <Marginer direction="vertical" margin={10} />
        <div className={classes.pass_wrapper}>
          <Input
            name="password"
            type={passwordShown ? "text" : "password"}
            placeholder="رمز عبور"
            onChange={handleChange}
          />
          <i className={classes.icon} onClick={togglePasswordVisiblity}>
            {passwordShown ? eye : eye_slash}
          </i>
        </div>
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <SubmitButton type="submit" onClick={handleSubmit}>
        ثبت‌نام
      </SubmitButton>
      <Marginer direction="vertical" margin="1.5rem" />
      <MutedLink href="#">
        عضو سایت هستید؟
        <BoldLink href="#" onClick={switchToSignin}>
          وارد شوید
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
