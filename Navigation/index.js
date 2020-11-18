import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import UserStack from "./StackNavigators/UserStack";
//import CartStack from "./StackNavigators/CartStack";

const { Navigator, Screen } = createBottomTabNavigator();

// Config
import { tabBarOptions, tabScreenOptions } from "./options";

export default function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName="Profile"
      tabBarOptions={tabBarOptions}
      screenOptions={tabScreenOptions}
    >
      <Screen name="Profile" component={UserStack} />
      {/* <Screen name="Cart" component={CartStack} /> */}
    </Navigator>
  );
}
