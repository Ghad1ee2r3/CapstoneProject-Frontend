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
} from "native-base";

import { setCart } from "../../redux/actions";

const Receipt = ({ cart, navigation, user, setCart }) => {
  let items = cart.items;
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
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Text>First Name : {user?.first_name}</Text>

            <Text>Last Name : {user?.last_name}</Text>
            <Text>Number: {user?.username}</Text>
            <Text>Email : {user?.email}</Text>
            <Left>
              <Body>
                {items.length ? (
                  <>{itemsReceipt}</>
                ) : (
                    <Text>Receipt is empty</Text>
                  )}
              </Body>
            </Left>
          </CardItem>
          <CardItem header>
            <Left>
              <Body>
                <Text>Subtotal: {cart.subtotal}</Text>
                <Text>Tax(15%): {cart.tax}</Text>
                <Text>Total: {cart.total}</Text>

                <Button onPress={() => handleReturn()}>
                  <Text> return to cart</Text>
                </Button>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
const mapStateToProps = ({ cart, user }) => ({
  cart,
  user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: () => dispatch(setCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
