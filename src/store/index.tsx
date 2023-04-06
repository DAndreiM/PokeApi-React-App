import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import berriesSlice from "./berriesSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { pokemonApi } from "../services/pokemon";

const Store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    itemsSlice: itemsSlice.reducer,
    berriesSlice: berriesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default Store;
