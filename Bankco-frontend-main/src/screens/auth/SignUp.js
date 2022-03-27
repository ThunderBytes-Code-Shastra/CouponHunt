import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../../constant/Colors";
import CustomInput from "../../components/auth/CustomInput";
import {
  authIsAuthenticatedSelector,
  authLoadingSelector,
} from "../../store/auth/selector";
import { authSignUp } from "../../store/auth/slice";
import signUpValidationSchema from "../../utils/signUpValidationSchema";

export default SignUp = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const isLoading = useSelector(authLoadingSelector);
  const isAuthenticated = useSelector(authIsAuthenticatedSelector);

  const usernameRef = useRef(null);
  const emailRef = useRef();
  const phoneRef = useRef();
  const passRef = useRef(null);
  const confirmPassRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated === true) {
      navigation.reset({
        index: 0,
        routes: [{ name: "TabNavigator" }],
      });
    }
  }, [isAuthenticated]);

  const focusUsername = () => {
    usernameRef.current.focus();
  };

  const focusEmail = () => {
    emailRef.current.focus();
  };

  const focusPhone = () => {
    phoneRef.current.focus();
  };

  const focusPass = () => {
    passRef.current.focus();
  };

  const focusConfirmPass = () => {
    confirmPassRef.current.focus();
  };

  const signUphandler = (values) => {
    dispatch(authSignUp(values));
  };

  const skipSignUp = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "TabNavigator" }],
    });
  };

  const navigateLogin = () => {
    navigation.replace("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated backgroundColor={Colors.primary} style="dark" />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }}>
        <TouchableOpacity onPress={skipSignUp}>
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
        <Text style={styles.welcomeText}>Welcome to Bankco</Text>
        <Text style={styles.loginText}>SignUp to your account</Text>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            name: "",
          }}
          onSubmit={signUphandler}
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
                value={values["name"]}
                error={errors["name"]}
                touched={touched["name"]}
                onChange={handleChange("name")}
                onBlur={() => handleBlur("name")}
                setFieldTouched={() => setFieldTouched("name")}
                placeholder="Enter your name"
                title="Name"
                onCodePress={() => {}}
                returnKeyType="next"
                onSubmitEditing={focusUsername}
              />
              <CustomInput
                ref={usernameRef}
                value={values["username"]}
                error={errors["username"]}
                touched={touched["username"]}
                onChange={handleChange("username")}
                onBlur={() => handleBlur("username")}
                setFieldTouched={() => setFieldTouched("username")}
                placeholder="Enter your username"
                title="Username"
                returnKeyType="next"
                onSubmitEditing={focusEmail}
              />
              <CustomInput
                ref={emailRef}
                value={values["email"]}
                error={errors["email"]}
                touched={touched["email"]}
                onChange={handleChange("email")}
                onBlur={() => handleBlur("email")}
                setFieldTouched={() => setFieldTouched("email")}
                placeholder="Enter your email id"
                title="Email ID"
                leadingTitle="email"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={focusPhone}
              />
              <CustomInput
                ref={phoneRef}
                value={values["phone"]}
                error={errors["phone"]}
                touched={touched["phone"]}
                onChange={handleChange("phone")}
                onBlur={() => handleBlur("phone")}
                setFieldTouched={() => setFieldTouched("phone")}
                placeholder="Enter your mobile number"
                title="Mobile Number"
                leadingTitle="phone"
                countryCode="+91"
                onCodePress={() => {}}
                returnKeyType="next"
                keyboardType="numeric"
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
                onSubmitEditing={focusConfirmPass}
                returnKeyType="next"
              />
              <CustomInput
                ref={confirmPassRef}
                value={values["confirmPassword"]}
                error={errors["confirmPassword"]}
                touched={touched["comfirmPassword"]}
                onChange={handleChange("confirmPassword")}
                onBlur={() => handleBlur("confirmPassword")}
                setFieldTouched={() => setFieldTouched("confirmPassword")}
                placeholder="Confirm password"
                title="Confirm Password"
                secureTextEntry
                passwordVisible={passwordVisible}
                setPasswordVisible={setPasswordVisible}
                onSubmitEditing={handleSubmit}
                returnKeyType="done"
              />

              {!isLoading && (
                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={styles.btnTxt}>Sign Up</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </Formik>
        {!isLoading ? (
          <Text style={styles.text}>
            Have a account?{" "}
            <Text onPress={navigateLogin} style={styles.login}>
              Login
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
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary,
    textAlign: "center",
    marginTop: 70,
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
  login: {
    fontWeight: "bold",
  },
  loader: {
    flex: 1,
    alignItems: "center",
  },
});
