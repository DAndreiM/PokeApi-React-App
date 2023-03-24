import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";

const Root = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
