import React from "react";
import { connect } from "react-redux";
import ItemCard from "./ItemCard";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Container } from "native-base";
import { postBill } from "../../redux/actions";

const Cart = ({ cart, navigation, postBill }) => {
  let items = cart.items;
  const itemCards = items.map((item) => <ItemCard key={item.id} item={item} />);
  console.log("---------cart------------");
  console.log(cart);
  console.log("---------cart------------");

  const itemsCart = items.map((item) => ({
    storeproduct: item.product.id,
    qty: item.quantity,
  }));
  //return storeBarcode (from URL take store Barcode then save inside items of  cart)
  const storeBarcode = items.map((item) => item.storeBarcode)[0];

  let bill = {
    total: cart.total,
    tax: cart.tax,
    store: storeBarcode,
    items: itemsCart,
  };

  const handleCheckout = () => {
    postBill(bill);
    navigation.replace("CheckoutPage");
  };

  return (
    <View style={styles.container}>
      {items.length ? <>{itemCards}</> : <Text>Cart is empty</Text>}

      <View style={styles.group1}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}>
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
            onPress={() => handleCheckout()}
            style={styles.button1}
          >
            <Text style={styles.payment}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postBill: (bill) => dispatch(postBill(bill)),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(197,195,195,1)",
  },
  group1: {
    width: 360,
    height: 150,
    marginTop: 400,
  },
  rect1: {
    width: 460,
    height: 290,
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
    marginTop: -21,
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
