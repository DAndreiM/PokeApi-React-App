import classes from "./Calculator.module.css";
import CalculatorBody from "../../components/calculator/CalculatorBody";

const Calculator = () => {
  return (
    <section className={classes.calculator}>
      <CalculatorBody />
    </section>
  );
};

export default Calculator;
