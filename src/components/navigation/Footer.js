import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link className={classes.notAllowed}>About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
