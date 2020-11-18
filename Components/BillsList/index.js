import React from "react";
import { connect } from "react-redux";
// components
import BillCard from "./BillCard";
//import { ImageBackground, View } from "react-native";

import { List, Content } from "native-base";
const BillsList = ({ navigation, bills }) => {
  //let bills = [{ created_date: "10-11-2020", total: "50" }];

  // send one item from list to display in card
  const billCards = bills.map((bill) => (
    <BillCard key={bill.id} bill={bill} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{billCards}</List>
    </Content>
  );
};
const mapStateToProps = ({ bills }) => ({
  bills,
});

export default connect(mapStateToProps)(BillsList);
//export default BillsList;
