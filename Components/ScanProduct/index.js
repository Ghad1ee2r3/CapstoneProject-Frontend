import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import Camera from "./Camera";
import Frame from "./Frame";

const ScanCamera = () => {
  // the laser inimation and the loop effect

  return (
    <>
      <Camera />
      <Frame />
    </>
  );
};

export default ScanCamera;
