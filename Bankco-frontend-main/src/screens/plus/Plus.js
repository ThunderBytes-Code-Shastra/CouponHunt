import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  Switch,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { CreditCardInput } from "react-native-credit-card-input";
import DropDownPicker from "react-native-dropdown-picker";

import Colors from "../../constant/Colors";

import {
  authIsAuthenticatedSelector,
  authNameSelector,
} from "../../store/auth/selector";
import CustomInput from "../../components/auth/CustomInput";

import { getCategories, submitCardDetail } from "../../store/coupon/slice";
import Skeleton from "../../components/Skeleton";

const { width, height } = Dimensions.get("screen");

const cardTypes = [
  {
    label: "Debit Cards",
    value: "Debit Cards",
  },
  {
    label: "Credit Cards",
    value: "Credit Cards",
  },
];

export default Plus = ({ navigation }) => {
  const [bankName, setBankName] = useState("");
  const [bankNameDropdownOpen, setBankNameDropdownOpen] = useState(false);
  const [cardType, setCardType] = useState("");
  const [cardTypeDropdownOpen, setCardTypeDropdownOpen] = useState(false);

  const banks = useSelector((state) => state.coupon.categories);
  const loading = useSelector((state) => state.coupon.loadingCategories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const onChange = (formData) => {};

  const onFocus = (field) => {};

  const onSubmitHandler = () => {
    dispatch(submitCardDetail({ bankName, cardType }));
  };

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
    <View style={styles.container}>
      <StatusBar style="light" />

      <CreditCardInput
        autoFocus
        requiresName={false}
        requiresCVC={false}
        requiresPostalCode={false}
        labelStyle={styles.label}
        inputStyle={styles.input}
        validColor={"black"}
        invalidColor={"red"}
        placeholderColor={"darkgray"}
        labels={{ number: "", expiry: "" }}
        onFocus={onFocus}
        onChange={onChange}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Bank Name</Text>
        <DropDownPicker
          listMode="SCROLLVIEW"
          placeholder="Select"
          style={styles.dropdown}
          placeholderStyle={styles.placeholder}
          textStyle={styles.dropdownTxt}
          selectedItemContainerStyle={styles.selectedDropdown}
          selectedItemLabelStyle={styles.selectedDropdownTxt}
          showTickIcon={false}
          open={bankNameDropdownOpen}
          value={bankName}
          items={banks}
          setOpen={setBankNameDropdownOpen}
          setValue={(callback) => setBankName(callback(bankName))}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Card Type</Text>
        <DropDownPicker
          listMode="SCROLLVIEW"
          placeholder="Select"
          style={styles.dropdown}
          placeholderStyle={styles.placeholder}
          textStyle={styles.dropdownTxt}
          selectedItemContainerStyle={styles.selectedDropdown}
          selectedItemLabelStyle={styles.selectedDropdownTxt}
          showTickIcon={false}
          open={cardTypeDropdownOpen}
          value={cardType}
          items={cardTypes}
          setOpen={setCardTypeDropdownOpen}
          setValue={(callback) => setCardType(callback(bankName))}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: Colors.tab3Secondary,
          marginTop: 20,
          marginHorizontal: 22,
          paddingVertical: 16,
          borderRadius: 16,
          alignItems: "center",
        }}
        onPress={onSubmitHandler}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 20,
  },
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  inputContainer: {
    marginVertical: 20,
    marginHorizontal: 12,
  },
  inputTitle: {
    marginBottom: 16,
    color: Colors.textPrimary,
    fontWeight: "bold",
    fontSize: 18,
  },
  dropdown: {
    borderRadius: 30,
    borderColor: "#03B44D",
  },
  placeholder: {
    color: "#b2b2b2",
  },
  dropdownTxt: {
    marginLeft: 10,
    fontSize: 16,
  },
  selectedDropdown: {
    backgroundColor: "#03B44D",
  },
  selectedDropdownTxt: {
    color: "#fff",
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginTop: 5,
  },
});

export const PlusOptions = ({ navigation }) => {
  return {
    headerTitle: "Plus",
    // headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab3Secondary },
  };
};
