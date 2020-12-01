import React from "react";
import { connect } from "react-redux";
import {
  Text,
  Left,
  Body,
  Content,
  Card,
  CardItem,
  Container,
  Button,
} from "native-base";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const CheckoutPage = ({ cart, navigation }) => {
  const handlePay = () => {
    navigation.replace("Payment");
  };

  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}>
            <View style={styles.subtotalRow}>
              <Text style={styles.subtotal}>Subtotal</Text>
              <Text style={styles.loremIpsum1}>{cart.subtotal}</Text>
            </View>
            <View style={styles.tax15Row}>
              <Text style={styles.tax15}>Tax (15%)</Text>
              <Text style={styles.tax16}>{cart.tax}</Text>
            </View>
            <View style={styles.total1Row}>
              <Text style={styles.total1}>Total</Text>
              <Text style={styles.loremIpsum2}>{cart.total} </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Payment")}
            style={styles.button1}
          >
            <Text style={styles.payment}>Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(197,195,195,1)",
  },
  group1: {
    width: 360,
    height: 197,
    marginTop: 220,
  },
  rect1: {
    width: 460,
    height: 280,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    top: 0,
  },
  subtotal: {
    fontFamily: "roboto-regular",
    color: "rgba(138,138,138,1)",
    transform: [
      {
        rotate: "1.00deg",
      },
    ],
    fontSize: 16,
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(138,138,138,1)",
    fontSize: 17,
    marginLeft: 190,
  },
  subtotalRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 46,
    marginLeft: 45,
    marginRight: 64,
  },
  tax15: {
    color: "rgba(138,138,138,1)",
    fontSize: 16,
    marginTop: 1,
  },
  tax16: {
    color: "rgba(138,138,138,1)",
    fontSize: 17,
    marginLeft: 177,
  },
  tax15Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 45,
    marginRight: 64,
  },
  total1: {
    color: "#121212",
    fontSize: 19,
    marginTop: 2,
  },
  loremIpsum2: {
    color: "#121212",
    fontSize: 23,
    marginLeft: 211,
  },
  total1Row: {
    height: 27,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 45,
    marginRight: 59,
  },
  button1: {
    left: 44,
    height: 55,
    backgroundColor: "rgba(31,178,204,1)",
    position: "absolute",
    right: 25,
    bottom: 0,
    borderRadius: 5,
    justifyContent: "center",
  },
  payment: {
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    marginLeft: 109,
  },
  rect1Stack: {
    height: 212,
    marginTop: -31,
  },
});
const mapStateToProps = ({ cart }) => ({
  cart,
});

export default connect(mapStateToProps)(CheckoutPage);
