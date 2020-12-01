import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import Frame from "./Frame";

const BarcodeCamera = ({ navigation, route }) => {
  const { storeBarcode } = route.params; //uuid of store

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

    if (data) {
      navigation.navigate("ProductDetail", {
        storeBarcode: storeBarcode, //uuid of store
        productBarcode: data, //barcode of product
      });
    } else {
      navigation.replace("ProductNotfound", { storeBarcode: storeBarcode });
    }

    setScanned(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ratio="16:9"
        style={StyleSheet.absoluteFillObject}
        // barCodeScannerSettings={{
        //   barCodeTypes: [
        //     BarCodeScanner.Constants.BarCodeType.code39,
        //     BarCodeScanner.Constants.BarCodeType.code93,
        //     BarCodeScanner.Constants.BarCodeType.code128,
        //     BarCodeScanner.Constants.BarCodeType.ean13,
        //     BarCodeScanner.Constants.BarCodeType.ean13
        //   ],
        // }}

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
          <Text style={{ textAlign: "center", color: "white" }}>Scan Product Barcode</Text>
        </View>
        <Frame />
      </View>

    </>
  );
};

export default BarcodeCamera;
