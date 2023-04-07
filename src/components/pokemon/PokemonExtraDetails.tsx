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
  console.log(data?.egg_groups);
  const rarityClass = data?.is_mythical
    ? classes.mythical
    : data?.is_legendary
    ? classes.legendary
    : classes.common;

  const rarityTitle = data?.is_mythical
    ? "MYTHICAL"
    : data?.is_legendary
    ? "LEGENDARY"
    : "COMMON";

  return (
    <>
      {!isLoading && error && (
        <p style={{ textAlign: "center" }}>
          There was an error loading the data
        </p>
      )}

      {isLoading && !error && (
        <p style={{ textAlign: "center" }}>Loading info, please be patient</p>
      )}

      {!isLoading && !error && (
        <div className={`${rarityClass} ${classes.extraDetailContainer} `}>
          <div className={`${rarityClass} ${classes.rarityTitle}`}>
            <p>{rarityTitle}</p>
          </div>
          <div className={classes.extraDetails}>
            <h1 className={classes.pokemonTitle}>{data?.name.toUpperCase()}</h1>
            <div className={classes.characteristics}>
              <div className={classes.baseCharacteristics}>
                <div>
                  <p>Rarity</p>
                  <p>{rarityTitle}</p>
                </div>
                <div>
                  <p>Generation</p>
                  <p>{data?.generation.name.toUpperCase()}</p>
                </div>
                <div>
                  <p>Status</p>
                  <p>{data?.is_baby ? "Baby" : "Adult"}</p>
                </div>
                <div>
                  <p>Shape</p>
                  <p>{data?.shape.name.toUpperCase()}</p>
                </div>
              </div>
              <div className={classes.baseCharacteristics}>
                <div>
                  <p>Can switch form</p>
                  <p> {data?.forms_switchable ? "YES" : "NO"}</p>
                </div>
                <div>
                  <p>Evolves from</p>
                  <p>
                    {data?.evolves_from_species ? (
                      <Link
                        className={classes.linkToEvolve}
                        to={`/pokemon/${data?.evolves_from_species.name}`}
                      >
                        {data?.evolves_from_species.name.toUpperCase()}
                      </Link>
                    ) : (
                      "Unspecified"
                    )}
                  </p>
                </div>
                <div>
                  <p>Base Happiness</p>
                  <p>{data?.base_happiness}</p>
                </div>
                <div>
                  <p>Capture Rate</p>
                  <p>{data?.capture_rate}</p>
                </div>
                <div>
                  <p>Egg Groups</p>
                  <p>
                    {data?.egg_groups.map(
                      (item) => `${item.name.toUpperCase()}, `
                    )}
                  </p>
                </div>
              </div>
            </div>
            <Link className={classes.pageLink} to={".."}>
              BACK
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonExtraDetails;
