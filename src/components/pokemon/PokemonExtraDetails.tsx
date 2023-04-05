import classes from "./PokemonExtraDetails.module.css";
import { Link } from "react-router-dom";
import { useGetPokemonSpeciesInfoQuery } from "../../services/pokemon";
import { useParams } from "react-router-dom";

const refetchInterval = 500000; //5000ms , 5 s

const PokemonExtraDetails = () => {
  const param = useParams();
  const { data, error, isLoading } = useGetPokemonSpeciesInfoQuery(
    `${param.pokemonID}`,
    {
      pollingInterval: refetchInterval,
    }
  );
  const rarityClass = data?.is_mythical
    ? classes.mythical
    : data?.is_legendary
    ? classes.legendary
    : classes.common;
  const rarityTitle = data?.is_mythical ? (
    <h1>MYTHICAL</h1>
  ) : data?.is_legendary ? (
    <h1>LEGENDARY</h1>
  ) : (
    <h1>COMMON</h1>
  );

  return (
    <>
      {!isLoading && error && (
        <p style={{ textAlign: "center" }}>
          There was an error loading the data
        </p>
      )}

      {isLoading && (
        <p style={{ textAlign: "center" }}>Loading info, please be patient</p>
      )}

      {!isLoading && !error && (
        <div className={`${rarityClass} ${classes.extraDetailContainer} `}>
          <div className={`${rarityClass} ${classes.rarityTitle}`}>
            {rarityTitle}
          </div>
          <div className={classes.extraDetails}>
            <h1 className={classes.pokemonTitle}>{data?.name.toUpperCase()}</h1>
            <div className={classes.characteristics}>
              <p>
                Rarity:
                {data?.is_mythical
                  ? "MYTHICAL"
                  : data?.is_legendary
                  ? "LEGENDARY"
                  : "COMMON"}
              </p>
              <p>Generation: {data?.generation.name.toUpperCase()}</p>
              <p>Status: {data?.is_baby ? "Baby" : "Adult"}</p>
              <p>Shape: {data?.shape.name.toUpperCase()}</p>
              <p>Can switch form: {data?.forms_switchable ? "YES" : "NO"}</p>
              <p>
                Evolves from species:
                {data?.evolves_from_species ? (
                  <Link to={`/pokemon/${data?.evolves_from_species.name}`}>
                    {data?.evolves_from_species.name.toUpperCase()}
                  </Link>
                ) : (
                  "Unspecified"
                )}
              </p>
              <p>Base Happiness: {data?.base_happiness}</p>
              <p>Capture Rate: {data?.capture_rate}</p>
              <p>
                Egg Groups:
                {data?.egg_groups.map((item) => `${item.name.toUpperCase()} `)}
              </p>
            </div>
            <Link to={".."}>BACK</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonExtraDetails;
