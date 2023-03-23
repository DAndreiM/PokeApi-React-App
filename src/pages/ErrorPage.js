import classes from "./ErrorPage.module.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/navigation/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <main className={classes.error}>
        <div>
          <h1>Error</h1>
          <p>Not found !</p>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ErrorPage;
