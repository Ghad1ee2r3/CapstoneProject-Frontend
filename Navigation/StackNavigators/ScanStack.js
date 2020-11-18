import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductDetail from "../../Components/ProductDetail";

import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

export default function ScanStack() {
  return (
    <Navigator
      initialRouteName="ProductDetail"
      screenOptions={stackScreenOptions}
    >
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ title: "Product" }}
      />
    </Navigator>
  );
}
