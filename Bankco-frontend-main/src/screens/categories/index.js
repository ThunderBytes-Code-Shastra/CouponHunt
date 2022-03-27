import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AllCategories, { AllCategoriesOptions } from "./AllCategories";
import CouponList, { CouponListOptions } from "./CouponList";
import CouponDetail, { CouponDetailOptions } from "./CouponDetail";

const Stack = createStackNavigator();

export default CategoriesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AllCategories">
      <Stack.Screen
        name="AllCategories"
        component={AllCategories}
        options={AllCategoriesOptions}
      />
      <Stack.Screen
        name="CouponList"
        component={CouponList}
        options={CouponListOptions}
      />
      <Stack.Screen
        name="CouponDetail"
        component={CouponDetail}
        options={CouponDetailOptions}
      />
    </Stack.Navigator>
  );
};
