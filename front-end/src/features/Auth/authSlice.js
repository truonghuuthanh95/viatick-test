import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {
  currentTab: "1",
  emailRegisted: null,
  user: null,
};

const auth = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
    setEmailRegisted: (state, action) => {
      state.emailRegisted = action.payload;
    },
    logout: (state, action) => {
      state = initialAuth;
    },
  },
});

const { reducer, actions } = auth;

export const { logout, setCurrentTab, setEmailRegisted } = actions;

export default reducer;
