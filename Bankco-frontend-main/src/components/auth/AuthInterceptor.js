import { useEffect } from "react";
import { useSelector } from "react-redux";

import { authAxios, baseAxios } from "../../services/axios";

import { authAccessTokenSelector } from "../../store/auth/selector";

export default AuthInterceptor = () => {
  const accessToken = useSelector(authAccessTokenSelector);

  const tokenInjectorInterceptor = async (config) => {
    if (config.headers.hasOwnProperty("authorization")) {
      return config;
    }

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  };

  useEffect(() => {
    const authAxiosInterceptorId = authAxios.interceptors.request.use(
      tokenInjectorInterceptor
    );

    const baseAxiosInterceptorId = baseAxios.interceptors.request.use(
      tokenInjectorInterceptor
    );

    return () => {
      authAxios.interceptors.request.eject(authAxiosInterceptorId);

      baseAxios.interceptors.request.eject(baseAxiosInterceptorId);
    };
  }, [accessToken]);

  return null;
};
