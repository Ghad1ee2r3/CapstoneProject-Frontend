import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import Frame from "./Frame";
import { BarCodeScanner } from "expo-barcode-scanner";

const QrCamera = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data);
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
    <>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ratio="16:9"
        style={StyleSheet.absoluteFillObject}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
      />
      <View style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }}>
        <View style={{
          backgroundColor: "#33333350", top: 100,
          marginLeft: 80, marginRight: 80, borderRadius: 15, borderWidth: 1, borderColor: '#ffffff50',
          height: 30, alignContent: "center", justifyContent: "center"
        }}>
          <Text style={{ textAlign: "center", color: "white" }}>Scan Store QR</Text>
        </View>
        <Frame />
      </View>
    </>
  );
};

export default QrCamera;
