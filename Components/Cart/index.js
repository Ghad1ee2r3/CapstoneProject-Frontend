import React from "react";
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
  View,
  List,
  ListItem,
  Thumbnail,
  Right,
} from "native-base";

import { postBill } from "../../redux/actions";

import emptyCartImg from "../../assets/empty_cart.png"
import { Dimensions, Image } from "react-native";

const Cart = ({ cart, navigation, postBill }) => {
  let items = cart.items;
  const itemCards = items.map((item) => {
    console.log(`${item.id} ${item.name}`);
    return (
      <ItemCard key={`${item.product.name} ${item.product.id}`} item={item} />
    )
  });

  const itemsCart = items.map((item) => ({
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
  var myWidth = Dimensions.get('window').width;

  const handleCheckout = () => {
    const new_bill = postBill(bill);
    navigation.replace("CheckoutPage");
  };

  return (
    <View style={{ flex: 1 }} >

      {items.length ? (
        <>
          <View style={{ flex: 3, }}>
            <View style={{
              backgroundColor: "white", margin: 15,
              borderRadius: 15,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>

              <List avatar>
                {itemCards}
              </List>
              <View style={{ right: 0, backgroundColor: "#fff", borderColor: "white", height: 50, justifyContent: "center", paddingHorizontal: 15 }}>
                <Text style={{ color: "#000", textAlign: "right" }}> TOTAL {cart.total} <Text style={{ color: "#1eb2cc" }}>SAR</Text></Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 25 }}>
            <Button full rounded success onPress={() => handleCheckout()}>
              <Text> checkout</Text>
            </Button>
          </View>
        </>
      ) : (
          <>
            <View style={{ flex: 3, backgroundColor: "white" }}>
              <View style={{
                flex: 2,
                padding: 20, justifyContent: "center", alignItems: "center"
              }}>
                <Image style={{ height: "80%", width: (myWidth * 0.8) }} source={emptyCartImg} />
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 26, fontWeight: "700", textAlign: "center" }}>Cart is empty</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: "white" }}></View>
          </>
        )}


    </View>
    //   <Container>
    //   <Content>
    //     <Card style={{ flex: 0 }}>
    //       <CardItem header>
    //         <Left>
    //           <Body>
    //             {items.length ? (
    //               <>
    //                 {itemCards}
    //                 <Button onPress={() => handleCheckout()}>
    //                   <Text> checkout</Text>
    //                 </Button>
    //               </>
    //             ) : (
    //                 <Text>Cart is empty</Text>
    //               )}
    //           </Body>
    //         </Left>
    //       </CardItem>
    //       <CardItem header>
    //         <Left>
    //           <Body>
    //             <Text>Total: {cart.total}</Text>
    //             {/* <Text>Subtotal: {cart.subtotal}</Text> */}
    //             <Text>Tax: {cart.tax}</Text>
    //           </Body>
    //         </Left>
    //       </CardItem>
    //     </Card>
    //   </Content>
    // </Container>
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
