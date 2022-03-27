import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../constant/Colors";

import CustomHeaderButton from "../../components/CustomHeaderButton";

import {
  authAvatarSelector,
  authEmailSelector,
  authIsAuthenticatedSelector,
  authNameSelector,
  authPhoneSelector,
  authUsernameSelector,
} from "../../store/auth/selector";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { authLogout } from "../../store/auth/slice";


export const PersonalInfo = () => (
  <View style={{ flex: 1, backgroundColor: "#fff" }}></View>
);

export const ReadSMS = () => {
  const sms = useSelector();

  return <View style={{ flex: 1, backgroundColor: "#fff" }}>

  </View>;
};

export default Profile = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Personal Info");

  const insets = useSafeAreaInsets();

  const isAuthenticated = useSelector(authIsAuthenticatedSelector);
  const avatar = useSelector(authAvatarSelector);
  const username = useSelector(authUsernameSelector);
  const name = useSelector(authNameSelector);
  const email = useSelector(authEmailSelector);
  const phone = useSelector(authPhoneSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.tab4Secondary,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 24, color: Colors.primary }}>My Profile</Text>
        <TouchableOpacity onPress={() => dispatch(authLogout())}>
          <MaterialCommunityIcons
            name="logout"
            size={26}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: Colors.tab4Secondary,
          height: 250,
          paddingTop: 15,
          paddingHorizontal: 8,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            backgroundColor: "#fff",
            borderRadius: 15,
            alignItems: "center",
            height: 150,
          }}
        >
          <View
            style={{
              transform: [{ translateY: -50 }],
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: avatar }}
              style={{
                width: 110,
                height: 110,
                borderRadius: 100,
                overflow: "hidden",
                borderColor: "#fff",
                borderWidth: 4,
                marginBottom: 6,
              }}
              resizeMode="cover"
            />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 16 }}>{email}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginTop: -20,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          // padding: 8,
        }}
      >
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity onPress={() => setSelectedTab("Personal Info")}>
            <Text
              style={[
                { fontSize: 18 },
                selectedTab === "Personal Info" && { fontWeight: "bold" },
              ]}
            >
              Personal Info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("Read SMS")}>
            <Text
              style={[
                { fontSize: 18 },
                selectedTab === "Read SMS" && { fontWeight: "bold" },
              ]}
            >
              Reedem Code
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      {/* {selectedTab === "Personal Info" ? <PersonalInfo /> : <ReadSMS />} */}

      <ReadSMS />

      {/* <View style={{ marginVertical: 10 }} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export const ProfileOptions = ({ navigation }) => {
  return {
    headerTitle: "Profile",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab4Secondary },
    headerTitleStyle: { fontSize: 24 },
  };
};
