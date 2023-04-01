import classes from "./MobNav.module.css";
import { useState } from "react";
import NavBody from "./Navbody";

const MobNav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavHandler = () => {
    setShowNav((prevNav) => !prevNav);
  };

  return (
    <>
      <div className={classes.mobNav}>
        <button onClick={toggleNavHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {showNav && (
        <NavBody
          showTheNav={toggleNavHandler}
          className={classes.mobNavItems}
        />
      )}
    </>
  );
};

export default MobNav;
