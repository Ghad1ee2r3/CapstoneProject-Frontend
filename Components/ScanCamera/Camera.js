import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Dimensions, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from 'expo-camera';

const MyCamera = ({ navigation }) => {
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
    // use type to only read spicified 
    if (type === 256) {
      // 256 means qr code
      alert(`Store ${data}`);
      Alert.alert(
        'Are You In this Store ?',
        `Store name should be here ${data}`,
        [
          {
            text: 'No',
            onPress: () => {
              console.log('Cancel Pressed')
              // navigate to the store select screen
              setScanned(false);
            },
            style: 'cancel'
          },
          {
            text: 'Yes', onPress: () => {
              console.log('OK Pressed')
              navigation.navigate("Store", { barcode: data });
            }
          }
        ],
        { cancelable: false }
      );
    } else {
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      setScanned(false);
    }

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
