import classes from "./Button.module.css";

const Button: React.FC<{
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
  > = (props) => {
  return (
    <button
      className={classes.button}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
