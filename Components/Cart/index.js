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

  const handleCheckout = () => {
    const new_bill = postBill(bill);
    navigation.replace("CheckoutPage");
  };

  return (
    <View style={{ flex: 1 }} >
      <View style={{ flex: 3, backgroundColor: "blue" }}>
        <View style={{ backgroundColor: "white", margin: 15, borderRadius: 15, }}>

          <List avatar>
            {items.length ? (
              <>
                {itemCards}
                <Button success onPress={() => handleCheckout()}>
                  <Text> checkout</Text>
                </Button>
              </>
            ) : (
                <Text>Cart is empty</Text>
              )}
          </List>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 25 }}>
        <Button full rounded success onPress={() => handleCheckout()}>
          <Text> checkout</Text>
        </Button>
      </View>
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
