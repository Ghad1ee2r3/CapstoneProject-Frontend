import React from "react";
import { connect } from "react-redux";
import ItemReceipt from "./ItemReceipt";
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

import { Col, Row } from "react-native-easy-grid";

import { setCart } from "../../redux/actions";
import { createPortal } from "react-dom";

const Receipt = ({ cart, navigation, user, setCart, bills }) => {
  console.log("bills from reciept");
  console.log(bills);
  console.log("itemssssssssssssss");
  let items = bills[bills.length - 1].items; //list of object

  console.log(bills[bills.length - 1].items);
  console.log("items from index recipt");
  console.log(items);
  const itemsReceipt = items.map((item) => (
    <ItemReceipt key={item.id} item={item} />
  ));

  console.log("itemsReceipt");

  console.log(itemsReceipt);

  const handleReturn = () => {
    setCart();
    navigation.replace("Cart");
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingTop: 17,
          paddingHorizontal: 25,
          backgroundColor: "#1eb2cc",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#fff", fontWeight: "700", marginVertical: 4 }}>
            Bill Number:
          </Text>
          <Text style={{ color: "#fff", fontWeight: "700", marginVertical: 4 }}>
            Store:
          </Text>
          <Text style={{ color: "#fff", fontWeight: "700", marginVertical: 4 }}>
            Bill Date:
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ color: "#fff", marginVertical: 4 }}>
            {bills[bills.length - 1].number}
          </Text>
          <Text style={{ color: "#fff", marginVertical: 4 }}>
            {bills[bills.length - 1].store}
          </Text>
          <Text style={{ color: "#fff", marginVertical: 4 }}>
            {bills[bills.length - 1].date}
          </Text>
        </View>
      </View>
      <View style={{ flex: 4 }}>
        <List style={{ marginRight: 12 }}>
          <ListItem
            thumbnail
            style={{ borderBottomWidth: 1, borderColor: "#ccc" }}
          >
            <Body>
              <Text style={{ fontWeight: "700" }}>PRODUCT NAME</Text>
            </Body>
            <Right>
              <Text style={{ fontWeight: "700", textAlign: "center" }}>
                QTY
              </Text>
            </Right>
            <Right>
              <Text style={{ fontWeight: "700", textAlign: "center" }}>
                PRICE
              </Text>
            </Right>
          </ListItem>
          {itemsReceipt}
        </List>
      </View>
      <View style={{ flex: 1, borderTopColor: "#ccc", borderTopWidth: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 20,
            justifyContent: "flex-end",
          }}
        >
          <View style={{ flex: 2 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "700" }}>Total:</Text>
            <Text style={{ fontWeight: "700" }}>Tax:</Text>
            {/* <Text style={{ fontWeight: "700" }}>Bill Date:</Text> */}
          </View>
          <View style={{ flex: 1 }}>
            <Text>{bills[bills.length - 1].total} SAR</Text>
            <Text>{bills[bills.length - 1].tax} SAR</Text>
            {/* <Text>{bills[bills.length - 1].date.slice(0, 10)}</Text> */}
          </View>
        </View>
      </View>
    </View>
    // <Container>
    //   <Content>
    //     <Card style={{ flex: 0 }}>
    //       <CardItem header>
    //         <Row>
    //           <Text>First Name : {user?.first_name}</Text>

    //           <Text>Last Name : {user?.last_name}</Text>
    //         </Row>
    //         <Row>
    //           <Text>Number: {user?.username}</Text>
    //         </Row>
    //         <Row>
    //           <Text>Email : {user?.email}</Text>
    //         </Row>
    //         <Left>
    //           <Body>
    //             {items.length ? (
    //               <>{itemsReceipt}</>
    //             ) : (
    //               <Text>Receipt is empty</Text>
    //             )}
    //           </Body>
    //         </Left>
    //       </CardItem>
    //       <CardItem header>
    //         <Left>
    //           <Body>
    //             <Text>Subtotal: {cart.subtotal}</Text>
    //             <Text>Tax(15%): {cart.tax}</Text>
    //             <Text>Total: {cart.total}</Text>

    //             <Button onPress={() => handleReturn()}>
    //               <Text> return to cart</Text>
    //             </Button>
    //           </Body>
    //         </Left>
    //       </CardItem>
    //     </Card>
    //   </Content>
    // </Container>
  );
};
const mapStateToProps = ({ cart, user, bills }) => ({
  cart,
  user,
  bills,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: () => dispatch(setCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
