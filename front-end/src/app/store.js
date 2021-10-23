import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import photoReducer from "features/Photo/photoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    photo: photoReducer,
  },
});
