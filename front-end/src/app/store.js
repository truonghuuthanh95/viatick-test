import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "features/Photo/photoSlice";
import authSlice from "features/Auth/authSlice";
export const store = configureStore({
  reducer: {
    photo: photoReducer,
    auth: authSlice,
  },
});
