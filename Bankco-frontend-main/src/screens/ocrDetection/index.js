import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OcrDetection, { OcrDetectionOptions } from "./OcrDetection";

const Stack = createStackNavigator();

export default OcrDetectionNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OCR"
        component={OcrDetection}
        options={OcrDetectionOptions}
      />
    </Stack.Navigator>
  );
};
