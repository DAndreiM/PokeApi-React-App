import { NavLink } from "react-router-dom";
import classes from "./NavBody.module.css";

const NavBody = ({ className, showTheNav }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <NavLink
            onClick={showTheNav}
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
            onClick={showTheNav}
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
