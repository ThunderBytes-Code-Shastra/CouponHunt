import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import Colors from "../../constant/Colors";

export default function BookmarkList() {
  return (
    <View>
      <StatusBar style="light" />
      <Text>Bookmark</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export const BookmarkListOptions = ({ navigation }) => {
  return {
    headerTitle: "Bookmarks",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab4Secondary },
  };
};
