import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home, { HomeOptions } from "./Home";

const Stack = createStackNavigator();

export default HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={HomeOptions} />
    </Stack.Navigator>
  );
};
