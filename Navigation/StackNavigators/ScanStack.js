import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductDetail from "../../Components/ProductDetail";

import Store from "../../Components/Store";

import ScanCamera from "../../Components/ScanCamera/Camera";

import ScanProduct from "../../Components/ScanProduct/Camera";
import ProductNotfound from "../../Components/ProductNotfound";
import { Button, Text } from "native-base";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

export default function ScanStack() {
  return (
    <Navigator
      style={{ backgroundColor: "red" }}
      initialRouteName="ScanCamera"
      screenOptions={stackScreenOptions}
    >
      <Screen
        name="Store"
        component={Store}
        options={
          (({ route }) => {
            const { storeBarcode } = route.params;
            return {
              storeBarcode: storeBarcode,
            };
          },
          { title: "Store" })
        }
      />

      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={
          (({ route, navigation }) => {
            const { storeBarcode } = route.params;
            const { productBarcode } = route.params;
            return {
              storeBarcode: storeBarcode,
              productBarcode: productBarcode,
            };
          },
          { title: "Product" })
          // ({ route, navigation }) => ({
          //   headerLeft: ({ navigation }) => (
          //     <Icon
          //       onPress={({ navigation }) => navigation.push("ScanProduct")}
          //       color="#fff"
          //       name="arrow-left"
          //       size={26}
          //       color="black"
          //     />
          //   ),
          // })
        }
      />
      <Screen
        name="ProductNotfound"
        component={ProductNotfound}
        options={
          (({ route, navigation }) => {
            const { storeBarcode } = route.params;
            return {
              storeBarcode: storeBarcode,
            };
          },
          { title: "ProductNotfound" })
        }
      />
      <Screen
        name="ScanCamera"
        component={ScanCamera}
        options={{ title: "ScanCamera" }}
      />

      <Screen
        name="ScanProduct"
        component={ScanProduct}
        options={
          (({ route }) => {
            const { storeBarcode } = route.params;
            return {
              storeBarcode: storeBarcode,
            };
          },
          { title: "ScanProduct" })
        }
      />
    </Navigator>
  );
}
