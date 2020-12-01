import React from "react";
import { connect } from "react-redux";
// components
import BillCard from "./BillCard";
import { ImageBackground, Text, TextInput, StyleSheet } from "react-native";

import { List, Content, Text } from "native-base";
const BillsList = ({ navigation, bills, user }) => {
  // send one item from list to display in card
  const billCards = bills.map((bill) => (
    <BillCard key={bill.id} bill={bill} navigation={navigation} />
  ));

  return (
    <ImageBackground
      style={styles.rect}
      imageStyle={styles.rect_imageStyle}
      source={require("../../assets/images/Gradient_ospoIDs.png")}
    >
      <List>{billCards}</List>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  rect: {
    flex: 1,
  },
  rect_imageStyle: {},
  logo: {
    width: 102,
    height: 120,
    alignSelf: "center",
  },
});
const mapStateToProps = ({ bills, user }) => ({
  bills,
  user,
});

export default connect(mapStateToProps)(BillsList);
