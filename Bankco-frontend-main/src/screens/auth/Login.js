import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../../constant/Colors";
import loginValidationSchema from "../../utils/loginValidationSchema";
import logo from "../../../assets/logo.png";

import CustomInput from "../../components/auth/CustomInput";

import { authLogin } from "../../store/auth/slice";
import {
  authIsAuthenticatedSelector,
  authLoadingSelector,
} from "../../store/auth/selector";

export default Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const isLoading = useSelector(authLoadingSelector);
  const isAuthenticated = useSelector(authIsAuthenticatedSelector);

  const usernameRef = useRef(null);
  const passRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated === true) {
      navigation.reset({
        index: 0,
        routes: [{ name: "TabNavigator" }],
      });
    }
  }, [isAuthenticated, navigation]);

  const loginhandler = ({ username, password }) => {
    dispatch(authLogin({ username, password }));
  };

  const focusPass = () => {
    passRef.current.focus();
  };

  const navigateSignup = () => {
    navigation.replace("SignUp");
  };

  const skipLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "TabNavigator" }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated backgroundColor={Colors.primary} style="dark" />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }}>
        <TouchableOpacity onPress={skipLogin}>
          <Text
            style={{
              textAlign: "right",
              fontSize: 16,
              color: Colors.secondary,
              marginVertical: 8,
              marginRight: 8,
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} resizeMode="stretch" />
        <Text style={styles.welcomeText}>Welcome to Coupon Hunt</Text>
        <Text style={styles.loginText}>Login to your account</Text>

        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ username: "", password: "" }}
          onSubmit={loginhandler}
        >
          {({
            handleSubmit,
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            setFieldTouched,
          }) => (
            <>
              <CustomInput
                ref={usernameRef}
                value={values["username"]}
                error={errors["username"]}
                touched={touched["username"]}
                onChange={handleChange("username")}
                onBlur={() => handleBlur("username")}
                setFieldTouched={() => setFieldTouched("username")}
                placeholder="Enter username"
                title="Username"
                returnKeyType="next"
                onSubmitEditing={focusPass}
              />

              <CustomInput
                ref={passRef}
                value={values["password"]}
                error={errors["password"]}
                touched={touched["password"]}
                onChange={handleChange("password")}
                onBlur={() => handleBlur("password")}
                setFieldTouched={() => setFieldTouched("password")}
                placeholder="Enter password"
                title="Password"
                secureTextEntry
                passwordVisible={passwordVisible}
                setPasswordVisible={setPasswordVisible}
                onSubmitEditing={handleSubmit}
              />
              {!isLoading && (
                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </Formik>

        {!isLoading ? (
          <Text style={styles.text}>
            Don’t have a account?{" "}
            <Text onPress={navigateSignup} style={styles.signup}>
              Sign up
            </Text>
          </Text>
        ) : (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={Colors.secondary} />
          </View>
        )}
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  logo: {
    width: 400,
    height: 200,
    alignSelf: "center",
    marginTop: 8,
    backgroundColor: "red"
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary,
    textAlign: "center",
    // marginTop: 70,
    marginBottom: 35,
    maxWidth: 380,
    alignSelf: "center",
  },
  loginText: {
    fontSize: 16,
    color: Colors.secondary,
    textAlign: "center",
    marginBottom: 10,
    maxWidth: 270,
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    color: Colors.secondary,
    textAlign: "center",
  },
  btnTxt: {
    color: Colors.primary,
    backgroundColor: Colors.secondary,
    borderRadius: 24,
    marginVertical: 20,
    paddingVertical: 15,
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
  loader: {
    flex: 1,
    alignItems: "center",
  },
  forgetPass: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.secondary,
    marginBottom: 10,
    marginTop: -10,
  },
  orContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  orLine: {
    height: 1,
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  or: {
    fontSize: 18,
    color: Colors.secondary,
    marginHorizontal: 22,
  },
  signup: {
    fontWeight: "bold",
  },
  footer: {
    marginBottom: 50,
  },
});
