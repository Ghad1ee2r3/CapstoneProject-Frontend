import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";

const Frame = () => {
  // the laser inimation and the loop effect
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: true,
      })
    ).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ ...styles.laser, opacity: fadeAnim }}
      ></Animated.View>
      <View style={styles.box}>
        <View style={styles.row1}>
          <View
            style={{
              width: "100%",
              flex: 1,
              borderColor: "white",
              borderLeftWidth: 3,
              borderTopWidth: 3,
            }}
          ></View>
          <View style={{ width: "100%", flex: 1 }}></View>
          <View style={{ width: "100%", flex: 1 }}></View>
          <View
            style={{
              width: "100%",
              flex: 1,
              borderColor: "white",
              borderRightWidth: 3,
              borderTopWidth: 3,
            }}
          ></View>
        </View>
        <View style={styles.row2}></View>
        <View style={styles.row3}>
          <View
            style={{
              width: "100%",
              flex: 1,
              borderColor: "white",
              borderLeftWidth: 3,
              borderBottomWidth: 3,
            }}
          ></View>
          <View style={{ width: "100%", flex: 1 }}></View>
          <View style={{ width: "100%", flex: 1 }}></View>
          <View
            style={{
              width: "100%",
              flex: 1,
              borderColor: "white",
              borderRightWidth: 3,
              borderBottomWidth: 3,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 300,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  row1: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  row2: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  row3: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  laser: {
    position: "absolute",
    height: 5,
    width: "75%",
    backgroundColor: "red",
  },
});

export default Frame;
