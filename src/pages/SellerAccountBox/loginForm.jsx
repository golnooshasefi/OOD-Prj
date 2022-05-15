import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

import UserContext from "../../store/UserContext";
import classes from "./login.module.scss";
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
const eye = <FontAwesomeIcon icon={faEye} />;
const eye_slash = <FontAwesomeIcon icon={faEyeSlash} />;

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // const navigate = useNavigate();
  const { login } = useContext(UserContext);
  // const [name, setName] = useState();

  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    email: "",
    password: "",
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
    login(formData.email);
    navigate(-1);

    axiosInstance
      .post(`accounts/api/token/`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "Bearer " + localStorage.getItem("access_token");
        // login(formData.email);
        // navigate(-1);
        //console.log(res);
        //console.log(res.data);
      });
  };

  return (
    <BoxContainer>
      <Marginer direction="vertical" margin="2rem" />
      <FormContainer>
        {/* <Input type="email" placeholder="ایمیل یا شماره موبایل" autoFocus /> */}
        <Input
          type="email"
          placeholder="ایمیل"
          autoFocus
          onChange={handleChange}
          name="email"
        />
        <Marginer direction="vertical" margin={10} />
        <div className={classes.pass_wrapper}>
          <Input
            type={passwordShown ? "text" : "password"}
            placeholder="رمز عبور"
            onChange={handleChange}
            name="password"
          />
          <i className={classes.icon} onClick={togglePasswordVisiblity}>
            {passwordShown ? eye : eye_slash}
          </i>
        </div>
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <MutedLink href="#">رمز عبور خود را فراموش کرده‌اید؟</MutedLink>
      <Marginer direction="vertical" margin="1.2em" />
      <SubmitButton onClick={handleSubmit} type="submit">
        ورود
      </SubmitButton>
      <Marginer direction="vertical" margin="1.5rem" />
      <MutedLink href="#">
        عضو نیستید؟{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          ثبت‌نام کنید
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
