import { NavLink } from "react-router-dom";
import classes from "./NavBody.module.css";

const NavBody = (props) => {
  return (
    <nav className={props.className}>
      <ul>
        <li>
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/"
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/pokemon"
          >
            Pokemon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBody;
