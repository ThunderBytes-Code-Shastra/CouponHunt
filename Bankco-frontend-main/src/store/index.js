import { configureStore } from "@reduxjs/toolkit";
import { createLogicMiddleware } from "redux-logic";

import { authAxios, baseAxios, mlAxios } from "../services/axios";

import authReducer from "./auth/slice";
import authLogics from "./auth/logic";

import couponReducer from "./coupon/slice";
import couponLogics from "./coupon/logic";

const logicDependencies = {
  authAxios,
  baseAxios,
  mlAxios,
};

const logicsArray = [...authLogics, ...couponLogics];

const logicMiddleware = createLogicMiddleware(logicsArray, logicDependencies);

export default store = configureStore({
  reducer: {
    auth: authReducer,
    coupon: couponReducer,
  },
  middleware: [logicMiddleware],
});
