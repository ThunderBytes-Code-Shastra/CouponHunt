import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-root-toast";

import SplashScreen from "../screens/SplashScreen";
import TabNavigator from "./TabNavigator";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

import AuthInterceptor from "../components/auth/AuthInterceptor";

import {
  authAccessTokenSelector,
  authErrorSelector,
  authLoadingSelector,
} from "../store/auth/selector";
import { authRemoveError } from "../store/auth/slice";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

export default Startup = () => {
  const accessToken = useSelector(authAccessTokenSelector);
  const authLoading = useSelector(authLoadingSelector);
  const error = useSelector(authErrorSelector);

  const dispatch = useDispatch();

  // displaying error generated in authentication
  useEffect(() => {
    if (error !== "") {
      Toast.show(error, {
        duration: Toast.durations.SHORT,
        shadow: true,
        animation: true,
        onHide: () => {
          // calls on toast's hide animation start.
          dispatch(authRemoveError());
        },
      });
    }
  }, [error]);

  return (
    <NavigationContainer>
      {/* If user is logged in, then append the access token in every api */}
      {typeof accessToken === "string" && accessToken !== "" ? (
        <AuthInterceptor />
      ) : null}

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* For loading purpose */}
        {authLoading ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : null}

        {/* Main content */}
        <Stack.Screen name="TabNavigator" component={TabNavigator} />

        {/* Login and register(signUp) Screens */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
