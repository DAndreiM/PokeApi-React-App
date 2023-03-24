import classes from "./PokemonItem.module.css";
import { useNavigate } from "react-router";

const PokemonItem = (props) => {
  const navigate = useNavigate();
  const firstLetterUpperCase = props.name.charAt(0).toUpperCase();
  const remainingWords = props.name.slice(1);
  const name = firstLetterUpperCase + remainingWords;

  const itemHandler = () => {
    navigate(`/pokemon/${props.name}`);
  };

  return (
    <li onClick={itemHandler} className={classes.item}>
      <div className={classes.badge}>LIMITED</div>
      <div className={classes.container}>
        <img
          alt="pokemon logo"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          }
        />
      </div>
      <div className={classes.info}>
        <h1>{name}</h1>
        <p>{props.id}</p>
      </div>
    </li>
  );
};

export default PokemonItem;
