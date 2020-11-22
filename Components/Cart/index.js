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
} from "native-base";

const Cart = ({ cart, navigation }) => {
  let items = cart.items;
  const itemCards = items.map((item) => <ItemCard key={item.id} item={item} />);

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
                    <Button onPress={() => navigation.replace("CheckoutPage")}>
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
                <Text>Subtotal: {cart.subtotal}</Text>
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

export default connect(mapStateToProps)(Cart);
