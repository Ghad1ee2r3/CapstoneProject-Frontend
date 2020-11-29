import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CheckoutPage from "../../Components/Cart/CheckoutPage";
import Cart from "../../Components/Cart";
import Payment from "../../Components/Payment";
import Receipt from "../../Components/Receipt";

import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

export default function ShopStack() {
  return (
    <Navigator initialRouteName="Cart" screenOptions={stackScreenOptions}>
      <Screen name="Cart" component={Cart} options={{ title: "Cart" }} />
      <Screen
        name="CheckoutPage"
        component={CheckoutPage}
        options={
          (({ route }) => {
            const { orderNumber } = route.params;
            return {
              orderNumber: orderNumber,
            };
          },
          { title: "Checkout" })
        }
      />
      <Screen
        name="Payment"
        component={Payment}
        options={{ title: "Payment" }}
      />
      <Screen
        name="Receipt"
        component={Receipt}
        options={{ title: "Receipt" }}
      />
    </Navigator>
  );
}
