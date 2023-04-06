import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./index";
import Berries from "../models/berriesModel";

type initState = {
  items: Berries[];
  errorState: string;
};

const initialState: initState = {
  items: [],
  errorState: "",
};

const berriesSlice = createSlice({
  name: "berriesSlice",
  initialState: initialState,
  reducers: {
    replaceItems(state, action: PayloadAction<Berries[]>) {
      state.items = [...action.payload];
    },
    addItems(state, action: PayloadAction<Berries>) {
      state.items.push(action.payload);
    },
    setError(state, action: PayloadAction<string>) {
      state.errorState = action.payload;
    },
  },
});

export function loadBerries(url: string) {
  return async function (dispatch: AppDispatch) {
    async function load() {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Something went wrong !");

      const data = await response.json();

      const berries: Berries[] = [];

      for (const i in data.results) {
        berries.push({
          id: +i + 1,
          name: data.results[i].name,
          url: data.results[i].url,
        });
      }
      dispatch(berriesSliceActions.replaceItems(berries));
    }
    try {
      await load();
    } catch (error: any) {
      dispatch(berriesSliceActions.setError(error.message));
      console.log(error);
    }
  };
}

export const berriesSliceActions = berriesSlice.actions;
export default berriesSlice;
