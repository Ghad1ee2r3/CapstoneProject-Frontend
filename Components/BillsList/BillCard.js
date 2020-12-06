import React from "react";
import {
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  ListItem,
} from "native-base";
import { StyleSheet, View } from "react-native";

const BillCard = ({ bill, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("BillDetail", { bill: bill })}>
      <View style={styles.container}>
        <CardItem header>
          <Body>
            <Text note>Order number : {bill.id}</Text>
            <Text note>From :{bill.store.name}</Text>
            <Text note>Date:{bill.date} </Text>
            <Text note>total :{bill.total}</Text>
          </Body>
        </CardItem>
      </View>
    </ListItem>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.96)",
    borderColor: "#000000",
    opacity: 0.9,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 0,
    borderRadius: 10,
    width: 355,
    height: 112,
    // marginRight: 20,
  },
});

export default BillCard;
