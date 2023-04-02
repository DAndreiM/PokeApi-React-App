import classes from "./Button.module.css";
import React from "react";

const Button:React.FC<{sendValue:(value: any) => void,value: any, children: React.ReactNode}> = (props) => {
  const value = props.value;
  const additionalClass = isNaN(value)
    ? value === "Clear" || value === "+/-" || value === "Del" || value === "."
      ? classes.special
      : classes.operator
    : classes.number;
  return (
    <button
      className={`${classes.buttonstyle} ${additionalClass}`}
      onClick={props.sendValue.bind(null, value)}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default Button;
