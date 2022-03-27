import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome, Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

import Colors from "../constant/Colors";

import CategoriesNavigator from "../screens/categories";
import HomeNavigator from "../screens/home";
import ProfileNavigator from "../screens/profile";
import BookmarkNavigator from "../screens/bookmark";
import PlusNavigator from "../screens/plus/index";
import ocrDetection from "../screens/ocrDetection";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        // tabBarActiveTintColor: Colors.secondary,
        // tabBarInactiveTintColor: Colors.inactiveTabColor,
        // tabBarColor:"#1744e8"
      }}
      backBehavior="initialRoute"
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarColor: Colors.tab1Secondary,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CategoriesNavigator"
        component={CategoriesNavigator}
        options={{
          tabBarColor: Colors.tab2Secondary,
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="th-list" size={24} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="PlusNavigator"
        component={PlusNavigator}
        options={{
          tabBarColor: Colors.tab3Secondary,
          tabBarLabel: "Plus",
          tabBarIcon: ({ color }) => (
            <Entypo name="plus" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OcrDetectionNavigator"
        component={ocrDetection}
        options={{
          headerShown: true,
          tabBarColor: Colors.tab4Secondary,
          tabBarLabel: "OCR",
          tabBarIcon: ({ color }) => (
            <AntDesign name="camera" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarColor: Colors.tab5Secondary,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  // return (
  //   <TabBar
  //     onPress={(tabIndex) => {
  //       handlePress(tabIndex);
  //     }}
  //     values={[
  //       {
  //         title: "Home",
  //         icon: "home",
  //         tintColor: curTab == 0 ? "red" : "blue",
  //         default: true,
  //         isIcon: true,
  //         iconType: iconTypes.Entypo,
  //       },
  //       {
  //         title: "Bookmark",
  //         icon: "bookmarks",
  //         tintColor: curTab == 1 ? "red" : "blue",
  //         isIcon: true,
  //         iconType: iconTypes.Ionicons,
  //       },
  //       {
  //         title: "PLus",
  //         icon: "pluscircle",
  //         tintColor: curTab == 2 ? "red" : "blue",
  //         isIcon: true,
  //         iconType: iconTypes.AntDesign,
  //       },
  //       {
  //         title: "Categories",
  //         icon: "th-list",
  //         tintColor: curTab == 3 ? "red" : "blue",
  //         isIcon: true,
  //         iconType: iconTypes.FontAwesome,
  //       },
  //       {
  //         title: "Profile",
  //         icon: "user",
  //         tintColor: curTab == 4 ? "red" : "blue",
  //         isIcon: true,
  //         iconType: iconTypes.FontAwesome,
  //       },
  //     ]}
  //   />
  // );
}
