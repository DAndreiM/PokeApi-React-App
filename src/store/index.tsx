import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const Store = configureStore({
  reducer: {
    itemsSlice: itemsSlice.reducer,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default Store;
