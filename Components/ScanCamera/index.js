import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Camera from "./Camera";
import Frame from "./Frame";

const ScanCamera = () => {
  // the laser inimation and the loop effect

  return (
    <>
      <Camera />
      <View style={{
        position:"absolute",
        left:0,
        right:0,
        top:0,
        bottom:0
      }}>
        <Frame />
      </View>
    </>
  );
};

export default ScanCamera;
