import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import pokemonModel from "../models/pokemonModel";
import { AppDispatch } from "./index";

type initState = {
  items: pokemonModel[];
  errorState: string;
  sortBy: string;
};

const initialState: initState = {
  items: [],
  errorState: "",
  sortBy: "",
};

const itemsSlice = createSlice({
  name: "itemsSlice",
  initialState: initialState,
  reducers: {
    replaceItems(state, action: PayloadAction<pokemonModel[]>) {
      state.items = [...action.payload];
    },
    addItem(state, action: PayloadAction<pokemonModel>) {
      state.items.push(action.payload);
    },
    sortItem(state) {
      if (state.sortBy === "none") {
        state.items.sort((a, b) => a.id - b.id);
      }
      if (state.sortBy === "descending") {
        state.items.sort((a, b) => b.id - a.id);
      }
      if (state.sortBy === "nascending") {
        state.items.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      if (state.sortBy === "ndescending") {
        state.items.sort((a, b) => (a.name > b.name ? -1 : 1));
      }
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setErrorState(state, action: PayloadAction<string>) {
      state.errorState = action.payload;
    },
  },
});

export function loadItems(url: string) {
  return async function (dispatch: AppDispatch) {
    async function load() {
      const response = await fetch(url);
      if (!response.ok) throw new Error("There was an error loading data...");
      const data = await response.json();
      const pokemons: { id: number; name: string; url: string }[] = [];
      console.log(data);

      for (const item in data.results) {
        pokemons.push({
          id: +item + 1,
          name: data.results[item].name,
          url: data.results[item].url,
        });
      }
      dispatch(itemsSlice.actions.replaceItems(pokemons));
    }
    try {
      await load();
    } catch (error: any) {
      dispatch(itemsSlice.actions.setErrorState(error.message));
      console.log(error);
    }
  };
}

export const itemsSliceAction = itemsSlice.actions;
export default itemsSlice;
