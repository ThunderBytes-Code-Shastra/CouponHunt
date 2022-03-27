import axios from "axios";

import config from "../constant/config";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const authAxios = axios.create({
  baseURL: config.baseURL + "auth/",
});

export const baseAxios = axios.create({
  baseURL: config.baseURL,
});

export const mlAxios = axios.create({
  baseURL: config.mlURL,
});
