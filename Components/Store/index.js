import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Content,
  Container,
  Card,
  CardItem,
  Left,
  Body,
  Input,
} from "native-base";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
const Store = ({ route, navigation, stores }) => {
  const storeBarcode = route.params.storeBarcode;

  //get store Which has the same entrance barcode
  const storeobj = stores.find((item) => item.uuid === storeBarcode);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../../assets/images/Gradient_ospoIDs.png")}
        >
          <View style={styles.areYouInColumn}>
            <Text style={styles.areYouIn}>Are you in</Text>
            <Text style={styles.spar}>{storeobj?.name}</Text>
          </View>
          <View style={styles.areYouInColumnFiller}></View>
          <View style={styles.button3RowColumn}>
            <View style={styles.button3Row}>
              <TouchableOpacity
                onPress={() =>
                  navigation.replace("ScanProduct", {
                    storeBarcode: storeBarcode,
                  })
                }
                style={styles.button3}
              >
                <Text style={styles.yes}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.replace("ScanCamera")}
                style={styles.button4}
              >
                <Text style={styles.no}>No</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footerTexts}>
              <View style={styles.button2Filler}></View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("SignUp")}
                style={styles.button2}
              ></TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
  },
  background: {
    flex: 1,
  },
  rect: {
    flex: 1,
  },
  rect_imageStyle: {},
  areYouIn: {
    fontFamily: "roboto-regular",
    color: "rgba(189,220,224,1)",
    fontSize: 48,
  },
  spar: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 44,
    marginLeft: 85,
  },
  areYouInColumn: {
    width: 232,
    marginTop: 164,
    marginLeft: 53,
  },
  areYouInColumnFiller: {
    flex: 1,
  },
  button3: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    flex: 1,
    marginRight: 19,
  },
  yes: {
    fontSize: 13,

    width: 25,
    color: "rgba(255,255,255,1)",
    marginLeft: 52,
  },
  button4: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    flex: 1,
    marginLeft: 19,
  },
  no: {
    fontSize: 13,

    width: 21,
    color: "rgba(255,255,255,1)",
    marginTop: 16,
    marginLeft: 57,
  },
  button3Row: {
    height: 55,
    flexDirection: "row",
    marginBottom: 99,
  },
  footerTexts: {
    height: 14,
    marginRight: 18,
  },
  button2Filler: {
    flex: 1,
  },
  button2: {
    width: 104,
    height: 14,
    marginLeft: 173,
  },
  button3RowColumn: {
    marginBottom: 166,
    marginLeft: 37,
    marginRight: 18,
  },
});
const mapStateToProps = ({ stores }) => ({
  stores,
});

export default connect(mapStateToProps)(Store);
