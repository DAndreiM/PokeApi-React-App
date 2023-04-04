import classes from "./Pokemon.module.css";
import PokemonList from "../components/pokemon/PokemonList";
import { useEffect, useState } from "react";
import { itemsSliceAction, loadItems } from "../store/itemsSlice";
import Button from "../ui/Button";
import { useAppDispatch, useAppSelector } from "../store/index";
import { useGetPokemonSpeciesInfoQuery } from "../services/pokemon";

const refetchInterval = 500990; //5000ms , 5 s

const Pokemon = () => {
  const [Loading, setLoading] = useState<boolean>(false);
  const {data, error, isLoading} = useGetPokemonSpeciesInfoQuery('bulbasaur', {
    pollingInterval: refetchInterval
  });
  const dispatch = useAppDispatch();
  const pokemonItem = useAppSelector((item) => item.itemsSlice.items);
  const errorState = useAppSelector((item) => item.itemsSlice.errorState);
  const offset = pokemonItem.length;
  console.log(data);

  useEffect(() => {
    if (offset === 0) {
      setLoading(true);
      dispatch(
        loadItems("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
      );
      setLoading(false);
    }
  }, [dispatch, offset]);

  const loadMorePokemonsHandler = async () => {
    if (Loading) return;
    setLoading(true);
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
    } catch (error: any) {
      dispatch(itemsSliceAction.setErrorState(error.message));
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      {offset === 0 && Loading && !errorState ? (
        <p className={classes.loadingContent}>Loading content...</p>
      ) : (
        <PokemonList pokemons={pokemonItem} />
      )}
      {Loading && offset > 0 && (
        <p className={classes.loadingContent}>Loading more pokemons...</p>
      )}
      {errorState && <p className={classes.loadingContent}>{errorState}</p>}
      <Button disabled={Loading} onClick={loadMorePokemonsHandler}>
        {Loading ? "Loading..." : "Load More"}
      </Button>
    </>
  );
};

export default Pokemon;
