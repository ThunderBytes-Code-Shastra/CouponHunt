import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  name: "",
  email: "",
  phone: "",
  avatar: "",
  accessToken: "",
  isAuthenticated: false,
  authLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin(state) {
      state.authLoading = true;
    },
    authLoginSuccess(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.username = payload.user.username;
      state.name = payload.user.name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.avatar = payload.user.avatar;
      state.authLoading = false;
      state.isAuthenticated = true;
    },
    authLoginFail(state, { payload }) {
      state.authLoading = false;
      state.isAuthenticated = false;
      state.error = payload;
    },
    authSignUp(state) {
      state.authLoading = true;
    },
    authSignUpSuccess(state, { payload }) {
      console.log({ payload });
      state.accessToken = payload.accessToken;
      state.username = payload.user.username;
      state.name = payload.user.name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.avatar = payload.user.avatar;
      state.authLoading = false;
      state.isAuthenticated = true;
    },
    authSignUpFail(state, { payload }) {
      state.authLoading = false;
      state.isAuthenticated = false;
      state.error = payload;
    },
    authLogout(state) {
      state.authLoading = true;
      state.isAuthenticated = false;
    },
    authLogoutSuccess(state) {
      state.username = "";
      state.name = "";
      state.avatar = "";
      state.email = "";
      state.phone = "";
      state.accessToken = "";
      state.isAuthenticated = false;
      state.authLoading = false;
      state.error = "";
    },
    authLogoutFail(state, { payload }) {
      state.authLoading = false;
      state.error = payload;
    },
    authRemoveError(state) {
      state.error = "";
    },
  },
});

export const {
  authLogin,
  authLoginSuccess,
  authLoginFail,
  authSignUp,
  authSignUpSuccess,
  authSignUpFail,
  authLogout,
  authLogoutSuccess,
  authLogoutFail,
  authRemoveError,
} = authSlice.actions;

export default authSlice.reducer;
