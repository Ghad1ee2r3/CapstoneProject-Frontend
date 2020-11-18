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
  Button,
} from "native-base";

const ItemCard = ({ item }) => {
  return (
    <ListItem>
      <Content>
        <Card>
          <Header />
          <CardItem header>
            <Left>
              <Body>
                <Text>{item.product.name}</Text>
                <Text note>quantity :{item.qty}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default ItemCard;
