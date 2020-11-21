import React, { useState, useEffect } from "react";
import { Text, View, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from 'expo-camera';

const MyCamera = ({ navigation, route }) => {

  console.log(route.params);
  const storeBarcode = route.params?.storeBarcode; //uuid of store
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
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // navigation.navigate("ProductDetail", { barcode: data });

    if (storeBarcode) {
      navigation.replace("ProductDetail", { productBarcode: data, storeBarcode: storeBarcode });
      setScanned(false);

    }
    navigation.replace("Store", { storeBarcode: data });
    setScanned(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  // console.log("");
  return (
    <View style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ratio='16:9'
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
};

export default MyCamera;
