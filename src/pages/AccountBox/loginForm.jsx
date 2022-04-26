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

  return (
    <BoxContainer>
      <Marginer direction="vertical" margin="2rem" />
      <FormContainer>
        {/* <Input type="email" placeholder="ایمیل یا شماره موبایل" autoFocus /> */}
        <Input type="email" placeholder="ایمیل" autoFocus />
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
      <MutedLink href="#">رمز عبور خود را فراموش کرده‌اید؟</MutedLink>
      <Marginer direction="vertical" margin="1.2em" />
      <SubmitButton type="submit">ورود</SubmitButton>
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
