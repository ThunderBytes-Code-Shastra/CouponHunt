import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BookmarkList, { BookmarkListOptions } from "./BookmarkList";

const Stack = createStackNavigator();

export default BookmarkNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AllCategories">
      <Stack.Screen
        name="BookmarkList"
        component={BookmarkList}
        options={BookmarkListOptions}
      />
    </Stack.Navigator>
  );
};
