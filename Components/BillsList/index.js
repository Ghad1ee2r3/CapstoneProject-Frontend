import React from "react";
import { connect } from "react-redux";
// components
import BillCard from "./BillCard";
import { List, Content, Text } from "native-base";
const BillsList = ({ navigation, bills, user }) => {
  // send one item from list to display in card
  const billCards = bills.map((bill) => (
    <BillCard key={bill.id} bill={bill} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{billCards.reverse()}</List>
    </Content>
  );
};
const mapStateToProps = ({ bills, user }) => ({
  bills,
  user,
});

export default connect(mapStateToProps)(BillsList);
