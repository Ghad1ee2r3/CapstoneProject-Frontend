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

const CheckoutPage = ({ cart, navigation }) => {
  const handlePay = () => {
    navigation.replace("Payment");
  };

  return (
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Left>
              <Body>
                <Text>Total Before Tax: {cart.subtotal}</Text>
                <Text>Tax: {cart.tax}</Text>
                <Text>Total After Tax: {cart.total}</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Left>
              <Body>
                <Text>Takes you to the payment page</Text>
                <Button onPress={() => handlePay()}>
                  <Text>Pay Now</Text>
                </Button>
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

export default connect(mapStateToProps)(CheckoutPage);
