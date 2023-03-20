import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";

const Root = () => {
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Root;
