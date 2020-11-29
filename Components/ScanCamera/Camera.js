import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";

const QrCamera = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const screenWidth = Dimensions.get("screen").width;
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    navigation.replace("Store", { storeBarcode: data });
    setScanned(false);
  };

  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ratio="16:9"
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
};

export default QrCamera;
