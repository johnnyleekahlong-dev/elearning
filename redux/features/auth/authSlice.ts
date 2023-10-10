import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },

    userLoggedin: (
      state,
      action: PayloadAction<{ accessToken: string; user: string }>
    ) => {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },

    userLoggedOut: (state, action) => {
      state.token = "";
      state.user = "";
    },
  },
});

export const { userRegistration, userLoggedin, userLoggedOut } =
  authSlice.actions;

export default authSlice.reducer;
