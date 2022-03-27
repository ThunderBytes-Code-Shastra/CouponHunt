import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../../constant/Colors";

import CustomHeaderButton from "../../components/CustomHeaderButton";
import { useSelector } from "react-redux";

export default CouponDetail = ({ route }) => {
  const params = route.params;

  const coupon = useSelector((state) =>
    state.coupon.couponList.find((item) => item._id === params?.couponId)
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.tab2Secondary,
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          position: "absolute",
          top: 180,
          bottom: 0,
          backgroundColor: "#fff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          width: "100%",
        }}
      />
      <View
        style={{
          width: "80%",
          marginTop: 100,
          zIndex: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: 8,
            backgroundColor: "#fff",
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: Colors.tab2Secondary,
                  paddingRight: 5,
                  paddingTop: 10,
                  fontSize: 24,
                }}
              >
                {coupon.offer + " OFF"}
              </Text>
              <Image
                source={{ uri: coupon.img }}
                style={{ width: 150, height: 120, marginRight: 5 }}
                resizeMode="contain"
              />
            </View>

            <Text
              style={{
                color: Colors.tab2Secondary,
                fontSize: 22,
                fontWeight: "bold",
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              Description
            </Text>
            <Text style={{ color: Colors.tab2Secondary, fontSize: 18 }}>
              {coupon.desc}
            </Text>

            <Text
              style={{
                color: Colors.tab2Secondary,
                fontSize: 22,
                fontWeight: "bold",
                marginTop: 30,
                marginBottom: 10,
              }}
            >
              Terms and Condition
            </Text>
            <Text
              style={{
                color: Colors.tab2Secondary,
                fontSize: 18,
                textAlign: "justify",
              }}
            >
              {coupon.tnc}
            </Text>

            <Text
              style={{
                backgroundColor: Colors.tab2Secondary,
                color: "#fff",
                fontSize: 22,
                paddingVertical: 15,
                paddingHorizontal: 25,
                alignSelf: "center",
                marginTop: 30,
                borderRadius: 15
              }}
            >
              Code: {coupon.code}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export const CouponDetailOptions = ({ navigation }) => {
  return {
    headerTitle: "Coupon Detail",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab2Secondary, elevation: 0 },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Back"
          color={Colors.primary}
          iconName="caret-back"
          onPress={() => navigation.goBack()}
        />
      </HeaderButtons>
    ),
  };
};
