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

const ItemCard = ({ item }) => {
  return (
    <Card key={item.barcode}>
      <CardItem>
        <Left>
          <Body>
            <Text>Name:{item.product.name}</Text>
            <Text note>Quantity :{item.quantity}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default ItemCard;
