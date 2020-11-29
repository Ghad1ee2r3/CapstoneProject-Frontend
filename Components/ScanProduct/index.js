import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import BarcodeCamera from "./Camera";
import Frame from "./Frame";

const ProductCamera = () => {
  // the laser inimation and the loop effect

  return (
    <>
      <BarcodeCamera />
      <Frame />
    </>
  );
};

export default ProductCamera;
