import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile, { ProfileOptions } from "./Profile";

const Stack = createStackNavigator();

export default ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
