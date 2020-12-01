import React from "react";
import { Icon } from "native-base";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

export const stackScreenOptions = {
  headerStyle: {
    backgroundColor: "rgb(31,178,204)",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "white",
};

export const tabBarOptions = {
  showLabel: false,
  activeTintColor: "black",
  inactiveTintColor: "white",
  style: {
    backgroundColor: "rgb(31,178,204)",
  },
};

export const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName = "";

    switch (route.name) {
      case "Profile":
        iconName = "account";
        break;

      case "Product":
        iconName = "crop-free";
        break;

      default:
        iconName = "cart";
    }
    return (
      <>
        <Icon name={iconName} type="MaterialCommunityIcons" style={{ color }} />
      </>
    );
  },
});
const styles = StyleSheet.create({
  container: {
    width: 85,
    height: 65,
  },
  ellipse: {
    width: 85,
    height: 65,
  },
});
