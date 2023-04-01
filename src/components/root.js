import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Footer from "./navigation/Footer";

const Root = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;
