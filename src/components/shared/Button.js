import React from "react";
import classNames from "classnames";
import classes from "./Button.module.scss";

function Button() {
  return (
    <button
      //{...(onClick ? { onClick: onClick } : {})}
      className={classNames(
        classes.Button
        // {
        //   [classes[`Button--${color}`]]: color,
        //   [classes[`Button--${size}`]]: size,
        // },
        // { [classes[`Button--white`]]: color === "white" },
        // { [classes[`Button--purple`]]: color === "purple" },
      )}
      // just an example for destructing props for jsx
      // {...props} // => onClick={onClick} className="felan"
    ></button>
  );
}
export default Button;
