import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Plus, { PlusOptions } from "./Plus";

const Stack = createStackNavigator();

export default ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Plus"
        component={Plus}
        options={PlusOptions}
      />
    </Stack.Navigator>
  );
};
