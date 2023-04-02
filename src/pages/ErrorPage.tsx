import classes from "./ErrorPage.module.css";
import Navigation from "../components/navigation/Navigation";

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
    </>
  );
};

export default ErrorPage;
