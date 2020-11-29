import React, { useEffect } from "react";
import { connect } from "react-redux";
import ItemCard from "./ItemCard";
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

import { postBill } from "../../redux/actions";

const Cart = ({ cart, navigation, postBill }) => {
  let items = cart.items;
  // useEffect(() => {
  //   items =
  // }, []);
  let itemCards;

  if (cart.items.length > 0) {
    itemCards = cart.items.map((item) => (
      <ItemCard key={item.id} item={item} />
    ));

    let itemsCart = cart.items.map((item) => ({
      storeproduct: item.product.id,
      qty: item.quantity,
    }));
    console.log("itemsCart");

    console.log(itemsCart);
    //return storeBarcode (from URL take store Barcode then save inside items of  cart)
    const storeBarcode = items.map((item) => item.storeBarcode)[0];

    let bill = {
      total: cart.total,
      tax: cart.tax,
      store: storeBarcode,
      items: itemsCart,
    };
  } else {
    if (cart.items.length < 1) {
      return <Text>Loading...</Text>;
    }
  }
  const handleCheckout = () => {
    new_bill = postBill(bill);
    navigation.replace("CheckoutPage");
  };

  return (
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Left>
              <Body>
                {items.length ? (
                  <>
                    {itemCards}
                    <Button onPress={() => handleCheckout()}>
                      <Text> checkout</Text>
                    </Button>
                  </>
                ) : (
                  <Text>Cart is empty</Text>
                )}
              </Body>
            </Left>
          </CardItem>
          <CardItem header>
            <Left>
              <Body>
                <Text>Total: {cart.total}</Text>
                {/* <Text>Subtotal: {cart.subtotal}</Text> */}
                <Text>Tax: {cart.tax}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
