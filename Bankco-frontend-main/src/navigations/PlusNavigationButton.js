import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PlusNavigationButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container]}>
        <MaterialCommunityIcons name="home" color={"#fff"} size={40} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.tab1Secondary,
    borderColor: "#fff",
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    width: 80,
  },
});
