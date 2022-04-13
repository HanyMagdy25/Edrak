import { configureStore } from "@reduxjs/toolkit";
import edrakReducer from "./EdrakSlice";

const store = configureStore({
  reducer: { edrak: edrakReducer },
});

export default store;
