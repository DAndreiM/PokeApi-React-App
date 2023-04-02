import classes from "./PokemonList.module.css";
import PokemonItem from "./PokemonItem";
import { useEffect, useRef } from "react";
import { itemsSliceAction } from "../../store/itemsSlice";
import { useAppDispatch, useAppSelector } from "../../store/index";
import pokemonModel from "../../models/pokemonModel";

const PokemonList: React.FC<{pokemons: pokemonModel[]}> = ({ pokemons }) => {
  const selection = useRef<HTMLSelectElement>(null);

  const dispatch = useAppDispatch();

  const pokemonItems = useAppSelector((item) => item.itemsSlice.items);
  const sorting = useAppSelector((item) => item.itemsSlice.sortBy);

  useEffect(() => {
    if (sorting) {
      dispatch(itemsSliceAction.sortItem());
      if (sorting === "none") dispatch(itemsSliceAction.setSortBy(""));
    }
  }, [dispatch, sorting, pokemonItems]);

  const sortHandler = () =>
    dispatch(itemsSliceAction.setSortBy(selection.current!.value));

  return (
    <>
      {pokemons.length > 0 && (
        <div className={classes.sortElements}>
          <select defaultValue={sorting} ref={selection} onChange={sortHandler}>
            <option value="none">None</option>
            <option value="descending">ID Descending</option>
            <option value="nascending">Name ascending</option>
            <option value="ndescending">Name descending</option>
          </select>
        </div>
      )}
      <ul className={classes.pokeList}>
        {pokemons.map((item) => (
          <PokemonItem
            key={item.id}
            id={item.id}
            name={item.name}
            url={item.url}
          />
        ))}
      </ul>
    </>
  );
};

export default PokemonList;
