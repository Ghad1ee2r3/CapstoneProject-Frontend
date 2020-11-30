import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import UserStack from "./StackNavigators/UserStack";
import CartStack from "./StackNavigators/CartStack";
import ScanStack from "./StackNavigators/ScanStack";

const { Navigator, Screen } = createBottomTabNavigator();

import { tabBarOptions, tabScreenOptions } from "./options";

export default function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName="Profile"
      tabBarOptions={tabBarOptions}
      screenOptions={tabScreenOptions}
    >
      <Screen name="Profile" component={UserStack} />
      <Screen name="Product" component={ScanStack} options={{unmountOnBlur: true}}/>
      <Screen name="Cart" component={CartStack} />
    </Navigator>
  );
}
