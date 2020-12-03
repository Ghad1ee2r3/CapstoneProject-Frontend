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
        <CardItem header style={{ backgroundColor: "#1eb2cc" }}>
          <Body style={{ backgroundColor: "#1eb2cc" }}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: 16,
                marginVertical: 4,
              }}
            >
              Bill Number : {bill.id}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: 12,
                marginVertical: 4,
              }}
            >
              From : {bill.store.name}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: 12,
                marginVertical: 4,
              }}
            >
              Date : {bill.date.slice(0, 10)}{" "}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: 12,
                marginVertical: 4,
              }}
            >
              Total : {bill.total}
            </Text>
          </Body>
        </CardItem>
      </View>
    </ListItem>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1eb2cc",
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
    height: 135,
    // marginRight: 20,
  },
});

export default BillCard;
