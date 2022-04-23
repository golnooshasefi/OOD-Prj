import React, { useState, useContext } from "react";
import classes from "./login.module.scss";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eye_slash = <FontAwesomeIcon icon={faEyeSlash} />;

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="نام و نام‌خانوادگی" autoFocus />
        <Marginer direction="vertical" margin={10} />
        <Input type="email" placeholder="ایمیل" />
        <Marginer direction="vertical" margin={10} />
        <Input type="tel" placeholder="شماره موبایل" />
        <Marginer direction="vertical" margin={10} />
        <div className={classes.pass_wrapper}>
          <Input
            type={passwordShown ? "text" : "password"}
            placeholder="رمز عبور"
          />
          <i className={classes.icon} onClick={togglePasswordVisiblity}>
            {passwordShown ? eye : eye_slash}
          </i>
        </div>
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <SubmitButton type="submit">ثبت‌نام</SubmitButton>
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
