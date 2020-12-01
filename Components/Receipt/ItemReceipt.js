import React from "react";
import {
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  ListItem,
} from "native-base";

const ItemReceipt = ({ item }) => {
  return (
    <Card key={item.barcode}>
      <CardItem>
        <Left>
          <Body>
            <Text note>Quantity :{item.quantity}</Text>
            <Text>Name:{item.product.name}</Text>

            <Text note>Price :{item.product.price}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default ItemReceipt;
