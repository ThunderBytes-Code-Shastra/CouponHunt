import { createLogic } from "redux-logic";
import get from "lodash/get";
import * as SecureStore from "expo-secure-store";

import {
  authLogin,
  authLoginSuccess,
  authLoginFail,
  authSignUp,
  authSignUpSuccess,
  authSignUpFail,
  authLogout,
  authLogoutSuccess,
  authLogoutFail,
} from "./slice";
import { sendMessages } from "../coupon/slice";

const authLoginLogic = createLogic({
  type: authLogin.type,
  latest: true,

  async process({ action, authAxios }, dispatch, done) {
    try {
      const { username, password } = action.payload;

      const res = await authAxios.post("login", {
        username,
        password,
      });

      dispatch(sendMessages());

      console.log("authLoginSuccess: ", res.data);
      dispatch(authLoginSuccess(res.data));
    } catch (err) {
      console.log("authLogin: ", { ...err });
      dispatch(
        authLoginFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

const authSignUpLogic = createLogic({
  type: authSignUp.type,
  latest: true,

  async process({ action, authAxios }, dispatch, done) {
    try {
      const { username, password, name, email, phone } = action.payload;

      const res = await authAxios.post("/account", {
        username,
        password,
        name,
        email,
        phone,
      });

      dispatch(sendMessages());

      dispatch(authSignUpSuccess(res.data));
    } catch (err) {
      dispatch(
        authSignUpFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

const authLogoutLogic = createLogic({
  type: authLogout.type,
  latest: true,

  async process(_, dispatch, done) {
    try {
      await SecureStore.deleteItemAsync("accessToken");
      dispatch(authLogoutSuccess());
    } catch (err) {
      dispatch(
        authLogoutFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

export default [authLoginLogic, authSignUpLogic, authLogoutLogic];
