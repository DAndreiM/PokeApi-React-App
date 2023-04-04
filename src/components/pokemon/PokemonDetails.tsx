import classes from "./PokemonDetails.module.css";
import { Link } from "react-router-dom";
import pokemonModel from "../../models/pokemonModel";

const PokemonDetails: React.FC<{pokemon: pokemonModel}> = ({ pokemon }) => {
  return (
    <div className={classes.info}>
      <div className={classes.title}>
        <h1>{pokemon.name}</h1>
        <ul className={classes.abilities}>{pokemon.abilities}</ul>
        <img src={pokemon.image} />
      </div>
      <div className={classes.stats}>
        <div>
          <p>Experience</p>
          <p className={classes.value}>{pokemon.experience}</p>
        </div>
        <div>
          <p>Height</p>
          <p className={classes.value}>{pokemon.height}</p>
        </div>
        <div>
          <p>Weight</p>
          <p className={classes.value}>{pokemon.weight}</p>
        </div>
      </div>
      <Link to="/pokemon">Back</Link>
    </div>
  );
};

export default PokemonDetails;
