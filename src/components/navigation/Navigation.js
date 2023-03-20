import classes from "./Navigation.module.css";
import DesktopNav from "./DesktopNav";
import MobNav from "./MobNav";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <DesktopNav />
      <MobNav />
    </div>
  );
};

export default Navigation;
