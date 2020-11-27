import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const Camera = ({ navigation, route }) => {
  const { storeBarcode } = route.params; //uuid of store

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const screenWidth = Dimensions.get("screen").width;
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
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
    <View style={{ backgroundColor: "red", width: "100%", height: "100%" }}>
      <BarCodeScanner
        style={{ position: "relative", flex: 1 }}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
    </View>
  );
};

export default Camera;
