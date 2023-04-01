import classes from "./Pokemon.module.css";
import PokemonList from "../components/pokemon/PokemonList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsSliceAction, loadItems } from "../store/itemsSlice";
import Button from "../ui/Button";

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const pokemonItem = useSelector((item) => item.itemsSlice.items);
  const errorState = useSelector((item) => item.itemsSlice.errorState);
  const offset = pokemonItem.length;

  useEffect(() => {
    if (offset === 0) {
      setIsLoading(true);
      dispatch(
        loadItems("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
      );
      setIsLoading(false);
    }
  }, [dispatch, offset]);

  const loadMorePokemonsHandler = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`
      );

      if (!response.ok) throw new Error("Couldn't load data...");

      const data = await response.json();

      for (const item in data.results) {
        dispatch(
          itemsSliceAction.addItem({
            id: 1 + offset + parseInt(item),
            name: data.results[item].name,
            url: data.results[item].url,
          })
        );
      }
    } catch (error) {
      dispatch(itemsSliceAction.setErrorState(error.message));
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      {offset === 0 && isLoading && !errorState ? (
        <p className={classes.loadingContent}>Loading content...</p>
      ) : (
        <PokemonList pokemons={pokemonItem} />
      )}
      {isLoading && offset > 0 && (
        <p className={classes.loadingContent}>Loading more pokemons...</p>
      )}
      {errorState && <p className={classes.loadingContent}>{errorState}</p>}
      <Button disabled={isLoading} onClick={loadMorePokemonsHandler}>
        {isLoading ? "Loading..." : "Load More"}
      </Button>
    </>
  );
};

export default Pokemon;
