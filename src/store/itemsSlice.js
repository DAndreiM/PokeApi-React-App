import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  errorState: "",
  sortBy: "",
};

const itemsSlice = createSlice({
  name: "itemsSlice",
  initialState: initialState,
  reducers: {
    replaceItems(state, action) {
      state.items = [...action.payload];
    },
    addItem(state, action) {
      state.items.push(action.payload);
    },
    sortItem(state, action) {
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
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setErrorState(state, action) {
      state.errorState = action.payload;
    },
  },
});

export function loadItems(url) {
  return async function (dispatch) {
    async function load() {
      const response = await fetch(url);
      if (!response.ok) throw new Error("There was an error loading data...");

      const data = await response.json();

      const pokemons = [];

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
    } catch (error) {
      dispatch(itemsSlice.actions.setErrorState(error.message));
      console.log(error);
    }
  };
}

export const itemsSliceAction = itemsSlice.actions;
export default itemsSlice;
