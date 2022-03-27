import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import Wishlist from "../screens/bookmark/BookmarkList";

const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerType: "slide" }}
      initialRouteName="TabNavigator"
    >
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
    </Drawer.Navigator>
  );
};
