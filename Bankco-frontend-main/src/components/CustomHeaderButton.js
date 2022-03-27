import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

export default CustomHeaderButton = (props) => {
  return <HeaderButton IconComponent={Ionicons} iconSize={34} {...props} />;
};
