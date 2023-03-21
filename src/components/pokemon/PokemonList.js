import classes from "./PokemonList.module.css";
import PokemonItem from "./PokemonItem";
import { useEffect, useRef } from "react";
import { itemsSliceAction } from "../../store/itemsSlice";
import { useDispatch, useSelector } from "react-redux";

const PokemonList = ({ pokemons }) => {
  const selection = useRef();

  const dispatch = useDispatch();

  const pokemonItems = useSelector((item) => item.itemsSlice.items);
  const sorting = useSelector((item) => item.itemsSlice.sortBy);

  useEffect(() => {
    if (sorting) {
      dispatch(itemsSliceAction.sortItem());
      if (sorting === "none") dispatch(itemsSliceAction.setSortBy(""));
    }
  }, [dispatch, sorting, pokemonItems]);

  const sortHandler = () =>
    dispatch(itemsSliceAction.setSortBy(selection.current.value));

  return (
    <>
      <div className={classes.sortElements}>
        <select defaultValue={sorting} ref={selection} onChange={sortHandler}>
          <option value="none">None</option>
          <option value="descending">ID Descending</option>
          <option value="nascending">Name ascending</option>
          <option value="ndescending">Name descending</option>
        </select>
      </div>
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
