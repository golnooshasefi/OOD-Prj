import classes from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eye_slash = <FontAwesomeIcon icon={faEyeSlash} />;
const close = <FontAwesomeIcon icon={faXmark} />;

function Modal(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const initialFormData = Object.freeze({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    shopName: "",
    shopNumber: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    console.log(formData);
    if (true) {
      props.onConfirm();
    }
  }

  function disableChecker() {
    console.log(formData);
    return false;
  }

  return (
    <div className={classes.modal}>
      <div className={classes.modal__header}>
        <h2 className={classes.modal__header__title}>ویرایش {props.title}</h2>
        <span className={classes.modal__header__icon} onClick={cancelHandler}>
          {close}
        </span>
      </div>
      <form onSubmit={confirmHandler} className={classes.modal__inputWrapper}>
        <input
          className={classes.modal__inputWrapper__input}
          type={passwordShown ? "text" : props.type}
          placeholder={props.title}
          autoFocus
          required
          onChange={handleChange}
          name={props.name}
        />
        {console.log("name:" + props.name)}
        {props.type === "password" && (
          <i
            className={classes.modal__inputWrapper__icon}
            onClick={togglePasswordVisiblity}
          >
            {passwordShown ? eye : eye_slash}
          </i>
        )}
      </form>
      <button
        className={
          !formData[props.name]
            ? classes.modal__btn__disable
            : classes.modal__btn
        }
        onClick={confirmHandler}
        disabled={!formData[props.name]}
      >
        ویرایش
      </button>
      {console.log(formData.fullName || formData.phoneNumber)}
    </div>
  );
}

export default Modal;
