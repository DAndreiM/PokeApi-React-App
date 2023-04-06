import classes from "./BeeryItem.module.css";
import { useNavigate } from "react-router";

const BeeryItem: React.FC<{ id: number; name: string }> = (props) => {
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate(`${props.name}`)} className={classes.berryItem}>
      <h1>Berry</h1>
      <p className={classes.berryTitle}>{props.name.toUpperCase()}</p>
      <p>{props.id}</p>
    </li>
  );
};

export default BeeryItem;
