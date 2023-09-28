import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (state, action) => {
      state.token = action.payload.token;
    },

    userLoggedin: (state, action) => {
      state.token = action.payload.accessToken;
    },

    userLoggedOut: (state, action) => {
      state.token = "";
      state.user = "";
    },
  },
});

export const { userRegistration } = authSlice.actions;
export default authSlice.reducer;
