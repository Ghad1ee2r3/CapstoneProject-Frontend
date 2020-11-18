import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "native-base";
// Navigation
import RootNavigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";

// Redux
import { Provider } from "react-redux";
import store from "./redux";

export default function App() {
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
