import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CheckoutPage from "../../Components/Cart/CheckoutPage";
import Cart from "../../Components/Cart";

import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

export default function ShopStack() {
  return (
    <Navigator initialRouteName="Cart" screenOptions={stackScreenOptions}>
      <Screen name="Cart" component={Cart} options={{ title: "Cart" }} />
      <Screen
        name="CheckoutPage"
        component={CheckoutPage}
        options={{ title: "Checkout" }}
      />
    </Navigator>
  );
}
