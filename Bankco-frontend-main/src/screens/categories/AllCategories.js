import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AntDesign } from "@expo/vector-icons";
import CustomHeaderButton from "../../components/CustomHeaderButton";

import Colors from "../../constant/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/coupon/slice";
import Skeleton from "../../components/Skeleton";

// const data = [
//   {
//     _id: "0",
//     name: "Axis Bank",
//     thumbnail:
//       "https://cdn.grabon.in/gograbon/images/merchant/1620734825059/swiggy-logo.jpg",
//   },
//   {
//     _id: "1",
//     name: "Axis Bank",
//     thumbnail:
//       "https://cdn.grabon.in/gograbon/images/merchant/1620734825059/swiggy-logo.jpg",
//   },
// ];

export default AllCategories = ({ navigation }) => {

  const data = useSelector(state => state.coupon.categories);
  const loading = useSelector(state => state.coupon.loadingCategories);

  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getCategories());
  }, [])

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton />
      </View>
    );
  }

  return (
    <View>
      <StatusBar style="light" />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: Colors.tab2Secondary,
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        Categories
      </Text>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 10,
          color: Colors.tab2Secondary,
          fontSize: 20,
          fontStyle: "italic",
          marginBottom: 20,
        }}
      >
        Bank wise Offers
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        ListFooterComponent={<View style={{height: 150}} />}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("CouponList", {name: item.name})}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 10,
              marginVertical: 8,
              marginHorizontal: 15,
              paddingHorizontal: 10,
              elevation: 5,
            }}
          >
            <Image
              style={{ width: 80, height: 80, marginRight: 10 }}
              resizeMode="contain"
              source={{ uri: item.thumbnail }}
            />
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                fontWeight: "bold",
                color: Colors.tab2Secondary,
              }}
              textBreakStrategy="balanced"
            >
              {item.name}
            </Text>
            <AntDesign
              name="caretright"
              size={20}
              color={Colors.tab2Secondary}
              style={{ padding: 5 }}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export const AllCategoriesOptions = ({ navigation }) => {
  return {
    headerTitle: "Categories",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab2Secondary },
  };
};
