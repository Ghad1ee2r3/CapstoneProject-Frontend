import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { Container } from "native-base";
//
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

// Navigation
import RootNavigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";

// Redux
import { Provider } from "react-redux";
import store from "./redux";

export default function App() {
  // const [loading, setLoading] = useState(true)

  const [loaded] = Font.useFonts({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });

  if (!loaded) {
    return <AppLoading />
  }

  LogBox.ignoreAllLogs(true)

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Container>
          <RootNavigator />
        </Container>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
