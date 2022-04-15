import React from "react";
function Button() {
  return (
    <button
      {...(onClick ? { onClick: onClick } : {})}
      className={classnames(
        classes.Button,
        {
          [classes[`Button--${color}`]]: color,
          [classes[`Button--${size}`]]: size,
        },
        // { [classes[`Button--white`]]: color === "white" },
        // { [classes[`Button--purple`]]: color === "purple" },
        className
      )}
      // just an example for destructing props for jsx
      // {...props} // => onClick={onClick} className="felan"
    >
      {children}
    </button>
  );
}
export default Button;
