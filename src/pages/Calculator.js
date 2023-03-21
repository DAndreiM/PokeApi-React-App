import classes from "./Calculator.module.css";
import { useState } from "react";
import Button from "../components/calculator/Button";
import { evaluate } from "mathjs";

const keys = [
  "Clear",
  "+/-",
  "Del",
  "*",
  7,
  8,
  9,
  "/",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  ".",
  0,
  ".",
  "=",
];

const operators = ["+", "-", "*", "/", "="];

const Calculator = () => {
  const [input, setInput] = useState("");

  const calculate = () => {
    if (!input || input.slice(-1) === "/") return;
    setInput((prevValue) => {
      const result = evaluate(prevValue);
      const filteredResult = result.toString().includes(".")
        ? result.toFixed(4)
        : result;
      return filteredResult.toString();
    });
  };

  const isOperator = (value) => {
    return (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "+/-" ||
      value === "."
    );
  };

  const keyClickHandler = (value) => {
    if (input.length === 0 && isOperator(value)) return;

    if (isNaN(input.slice(-1)) && isOperator(value) && input.slice(-1) !== ")")
      return;

    if (input.slice(-1) === ")" && !isNaN(value)) return;

    if (value === "Clear") return setInput("");

    if (value === "+/-")
      return setInput((prevValue) =>
        input.length !== 0 ? `-(${prevValue})` : ""
      );

    if (value === "Del")
      return setInput((prevValue) =>
        input.length > 0 ? prevValue.slice(0, -1) : ""
      );

    if (value === "=") {
      if (isOperator(input.toString().charAt(-1))) return;
      return calculate();
    }

    if (input.length >= 16) return;

    setInput((prevValue) => prevValue + value);
    console.log(input);
  };

  const Buttons = keys.map((item) => (
    <Button
      key={`${item}.${Math.random()}`}
      value={item}
      sendValue={keyClickHandler}
    >
      {item}
    </Button>
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.results}>{input}</div>
      <div className={classes.numbers}>{Buttons}</div>
    </div>
  );
};

export default Calculator;
