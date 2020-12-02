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
  Thumbnail,
  Right,
} from "native-base";

const ItemCard = ({ item }) => {
  return (
    <ListItem key={item.barcode}>
      <Thumbnail source={{ uri: item.product.image }} />
      <Body>
        <Text>{item.product.name}</Text>
        <Text note>Doing what you like will always keep you happy . .</Text>
      </Body>
      <Right>
        <Text note>QTY</Text>
        <Text>{item.quantity}</Text>
      </Right>
    </ListItem>
    // <Card key={item.barcode}>
    //   <CardItem>
    //     <Left>
    //       <Body>
    //         <Text>Name:{item.product.name}</Text>
    //         <Text note>Quantity :{item.quantity}</Text>
    //       </Body>
    //     </Left>
    //   </CardItem>
    // </Card>
  );
};

export default ItemCard;
