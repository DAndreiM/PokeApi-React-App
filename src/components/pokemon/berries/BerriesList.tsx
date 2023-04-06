import classes from "./BerriesList.module.css";
import Berries from "../../../models/berriesModel";
import BeeryItem from "./BeeryItem";

const BerriesList: React.FC<{ berry: Berries[] }> = (props) => {
  return (
    <ul className={classes.berriesList}>
      {props.berry.map((item) => (
        <BeeryItem key={item.name} id={item.id} name={item.name} />
      ))}
    </ul>
  );
};

export default BerriesList;
