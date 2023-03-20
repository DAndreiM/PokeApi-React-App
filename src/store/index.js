import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";

const Store = configureStore({
  reducer: {
    itemsSlice: itemsSlice.reducer,
  },
});

export default Store;
