import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

export default TouchableButton = ({
  rippleColor = "white",
  disabled = false,
  style,
  ...props
}) =>
  Platform.OS === "android" ? (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(rippleColor, true)}
      style={[disabled ? styles.disabled : styles.enabled, style]}
      {...props}
    />
  ) : (
    <TouchableOpacity
      style={[disabled ? styles.disabled : styles.enabled, style]}
      {...props}
    />
  );

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.8,
  },
  enabled: {
    opacity: 1,
  },
});
