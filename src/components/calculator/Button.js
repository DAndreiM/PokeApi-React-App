import classes from "./Button.module.css";
import React from "react";

const Button = (props) => {
  const value = props.children;
  const additionalClass = isNaN(value)
    ? value === "Clear" || value === "+/-" || value === "Del" || value === "."
      ? classes.special
      : classes.operator
    : classes.number;
  return (
    <button
      className={`${classes.buttonstyle} ${additionalClass}`}
      onClick={() => props.sendValue(value)}
      value={props.value}
    >
      {value}
    </button>
  );
};

export default Button;
