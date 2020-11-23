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
} from "native-base";

const CheckoutPage = ({ cart, navigation }) => {
  return (
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Left>
              <Body>
                <Text>Subtotal: {cart.subtotal}</Text>
                <Text>Tax: {cart.tax}</Text>
                <Text>Total: {cart.total}</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Left>
              <Body>{/* //options pay */}</Body>
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
