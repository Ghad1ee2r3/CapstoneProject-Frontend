import React from "react";
import { Icon } from "native-base";

export const stackScreenOptions = {
  headerStyle: {
    backgroundColor: "#1eb2cc",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "white",
};

export const tabBarOptions = {
  showLabel: false,
  activeTintColor: "#ffffff95",
  inactiveTintColor: "#333333",
  style: {
    backgroundColor: "#1eb2cc",
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
        iconName = "barcode-scan";
        break;

      default:
        iconName = "cart";
    }
    return (
      <Icon name={iconName} type="MaterialCommunityIcons" style={{ color }} />
    );
  },
});
